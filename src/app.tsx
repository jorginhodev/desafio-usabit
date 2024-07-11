import 'react-toastify/dist/ReactToastify.css'

import { QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { queryClient } from '@/lib/react-query'

import { router } from './routes'

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />

      <ToastContainer />
    </QueryClientProvider>
  )
}
