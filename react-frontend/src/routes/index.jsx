import { createBrowserRouter } from 'react-router-dom'
import AuthLayout from '@/layouts/AuthLayout'
import DashboardLayout from '@/layouts/DashboardLayout'

import {
  LoginPage,
  OverviewPage,
  RegisterPage,
  TasksPage,
  UsersPage,
} from './lazy-loader'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
      {
        path: '/register',
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <OverviewPage />,
      },
      {
        path: 'users',
        element: <UsersPage />,
      },
      {
        path: 'tasks',
        element: <TasksPage />,
      },
    ],
  },
])

export default router
