
import React from 'react';
import type { ActionFunctionArgs, RouteObject } from 'react-router-dom';
import LoginPage from './index';
import { validateLoginForm } from './functions';

export type LoginActionData = {
  errors?: string[];
  success?: string;
  values?: {
    email: string;
  };
};

export async function loginAction({ request }: ActionFunctionArgs): Promise<LoginActionData> {
  const formData = await request.formData();
  const email = String(formData.get('email') ?? '');
  const password = String(formData.get('password') ?? '');
  const errors = validateLoginForm({ email, password });

  if (errors.length > 0) {
    return {
      errors,
      values: { email },
    };
  }

  return {
    success: 'Login request submitted successfully.',
    values: { email },
  };
}

const loginRoute: RouteObject = {
  path: '/login',
  element: React.createElement(LoginPage),
  action: loginAction,
};

export default loginRoute;