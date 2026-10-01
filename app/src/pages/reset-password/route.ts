import React from 'react';
import type { ActionFunctionArgs, RouteObject } from 'react-router-dom';
import ResetPasswordPage from './index';
import { validateResetPasswordForm } from './functions';

export type ResetPasswordActionData = {
	errors?: string[];
	success?: string;
	values?: {
		email: string;
	};
};

export async function resetPasswordAction({ request }: ActionFunctionArgs): Promise<ResetPasswordActionData> {
	const formData = await request.formData();
	const email = String(formData.get('email') ?? '');
	const errors = validateResetPasswordForm({ email });

	if (errors.length > 0) {
		return {
			errors,
			values: { email },
		};
	}

	return {
		success: 'Password reset request submitted successfully.',
		values: { email },
	};
}

const resetPasswordRoute: RouteObject = {
	path: '/reset-password',
	element: React.createElement(ResetPasswordPage),
	action: resetPasswordAction,
};

export default resetPasswordRoute;
