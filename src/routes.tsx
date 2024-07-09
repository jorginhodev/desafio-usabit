import { createBrowserRouter } from 'react-router-dom'

import { DefaultLayout, Home } from '@/pages'

export const router: ReturnType<typeof createBrowserRouter> =
  createBrowserRouter([
    {
      path: '/',
      element: <DefaultLayout />,
      children: [{ path: '/', element: <Home /> }],
    },
  ])
