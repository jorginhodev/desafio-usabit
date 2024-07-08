import { createBrowserRouter } from 'react-router-dom'

import { Home } from '@/pages'

export const router: ReturnType<typeof createBrowserRouter> =
  createBrowserRouter([{ path: '/', element: <Home /> }])
