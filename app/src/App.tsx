import React from 'react';
import './App.css';
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import LoginRoute from './pages/login/route';
import RegistrationRoute from './pages/registration/route';
import ResetPasswordRoute from './pages/reset-password/route';
import ErrorPage from './pages/error';

function Home() {
  return (
    <main className="appShell">
      <section className="heroPanel">
        <p className="eyebrow">Codyza Weather</p>
        <h1>Weather updates without the clutter.</h1>
        <p className="heroCopy">
          Check conditions, manage your account, and recover access from a
          cleaner entry point.
        </p>
        <div className="heroActions">
          <Link className="primaryLink" to="/login">
            Login
          </Link>
          <Link className="secondaryLink" to="/registration">
            Create account
          </Link>
          <Link className="ghostLink" to="/reset-password">
            Reset password
          </Link>
        </div>
      </section>
    </main>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  LoginRoute,
  RegistrationRoute,
  ResetPasswordRoute,
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
