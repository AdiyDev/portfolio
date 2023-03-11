import { createBrowserRouter, Navigate } from 'react-router-dom'
import { NotFoundPage } from '@/pages/NotFoundPage'
import MainLayout from '@/layouts/MainLayout'
import AuthLayout from '@/layouts/AuthLayout'

const isAuth = false

export const router = createBrowserRouter([
  {
    path: '/',
    element: isAuth ? <MainLayout /> : <Navigate to="/signin" />,
    children: [
      {
        index: true,
        element: (
          <>
            <section>three.js background</section>
            <section>
              <div>player</div>
            </section>
          </>
        ),
      },
    ],
  },
  {
    path: 'signin',
    element: isAuth ? <Navigate to="/" /> : <AuthLayout />,
    children: [
      {
        index: true,
        element: <div>где авторизация?</div>,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])
