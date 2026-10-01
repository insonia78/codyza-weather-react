import React from 'react';
import type { ActionFunctionArgs, RouteObject } from 'react-router-dom';
import RegistrationPage from './index';
import { validateRegistrationForm } from './functions';

export type RegistrationActionData = {
	errors?: string[];
	success?: string;
	values?: {
		email: string;
	};
};

export async function registrationAction({ request }: ActionFunctionArgs): Promise<RegistrationActionData> {
	const formData = await request.formData();
	const email = String(formData.get('email') ?? '');
	const password = String(formData.get('password') ?? '');
	const confirmPassword = String(formData.get('confirmPassword') ?? '');
	const errors = validateRegistrationForm({ email, password, confirmPassword });

	if (errors.length > 0) {
		return {
			errors,
			values: { email },
		};
	}

	return {
		success: 'Registration request submitted successfully.',
		values: { email },
	};
}

const registrationRoute: RouteObject = {
	path: '/registration',
	element: React.createElement(RegistrationPage),
	action: registrationAction,
};

export default registrationRoute;
