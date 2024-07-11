import { http, HttpResponse } from 'msw'

import { CreateCustomerBody } from '../create-customer'
import { customers } from './customers'

export const createCustomerMock = http.post<never, CreateCustomerBody>(
  '/customers',
  async ({ request }) => {
    const { name, email, city, state } = await request.json()
    const id = Math.random().toString(36).substring(7)

    const newUser = {
      id,
      name,
      email,
      city,
      state,
    }

    customers.push(newUser)

    return new HttpResponse(null, { status: 201 })
  },
)
