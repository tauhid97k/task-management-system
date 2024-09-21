import { lazy } from 'react'

// Auth Pages
export const LoginPage = lazy(() => import('@/pages/auth/LoginPage'))
export const RegisterPage = lazy(() => import('@/pages/auth/RegisterPage'))

// Dashboard Pages
export const OverviewPage = lazy(() => import('@/pages/dashboard/OverviewPage'))
export const UsersPage = lazy(() => import('@/pages/dashboard/UsersPage'))
export const TasksPage = lazy(() => import('@/pages/dashboard/TasksPage'))
