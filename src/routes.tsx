import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './page/_layout/app'
import { AuthLayout } from './page/_layout/auth'
import { Dashboard } from './page/app/dashboard'
import { SignIn } from './page/auth/sign-in'
import { SignUp } from './page/auth/sign-up'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [{ path: '/', element: <Dashboard /> }],
  },

  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: '/sign-in', element: <SignIn /> },
      { path: '/sign-up', element: <SignUp /> },
    ],
  },
])
