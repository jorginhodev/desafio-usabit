import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { getCustomersMock } from './get-customers-mock'

export const worker = setupWorker(getCustomersMock)

export async function enableMocks() {
  if (env.MODE === 'production') {
    return
  }

  await worker.start()
}
