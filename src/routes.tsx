import { createBrowserRouter } from 'react-router-dom'

import { DefaultLayout, Home, New } from '@/pages'

export const router: ReturnType<typeof createBrowserRouter> =
  createBrowserRouter([
    {
      path: '/',
      element: <DefaultLayout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/new', element: <New /> },
      ],
    },
  ])
