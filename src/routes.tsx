import { createBrowserRouter } from 'react-router-dom'

import { DefaultLayout, Edit, Error, Home, New, NotFound } from '@/pages'

export const router: ReturnType<typeof createBrowserRouter> =
  createBrowserRouter([
    {
      path: '/',
      element: <DefaultLayout />,
      errorElement: <Error />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/new', element: <New /> },
        { path: '/edit/:id', element: <Edit /> },
      ],
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ])
