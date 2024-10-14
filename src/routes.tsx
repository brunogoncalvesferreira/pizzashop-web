import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './page/_layout/app'
import { AuthLayout } from './page/_layout/auth'
import { NotFound } from './page/404'
import { Orders } from './page/app/orders/orders'
import { SignIn } from './page/auth/sign-in'
import { SignUp } from './page/auth/sign-up'
import { Dashboard } from './page/dashboard/dashboard'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/orders', element: <Orders /> },
    ],
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
