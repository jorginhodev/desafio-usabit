import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { createCustomerMock } from './create-customer-mock'
import { editCustomerMock } from './edit-customer-mock'
import { getCustomersMock } from './get-customers-mock'

export const worker = setupWorker(
  getCustomersMock,
  createCustomerMock,
  editCustomerMock,
)

export async function enableMocks() {
  if (env.MODE === 'production') {
    return
  }

  await worker.start()
}
