import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { getClientsMock } from './get-clients-mock'

export const worker = setupWorker(getClientsMock)

export async function enableMocks() {
  if (env.MODE === 'production') {
    return
  }

  await worker.start()
}
