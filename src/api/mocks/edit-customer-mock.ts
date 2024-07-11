import { http, HttpResponse } from 'msw'

import { EditCustomerBody } from '../edit-customer'
import { customers } from './customers'

export const editCustomerMock = http.patch<never, EditCustomerBody>(
  '/customers/:id',
  async ({ request }) => {
    const url = new URL(request.url)
    const customerId = url.pathname.split('/').pop()

    const { name, email, city, state } = await request.json()

    const user = customers.find((customer) => customer.id === customerId)

    if (!user) {
      return new HttpResponse(null, { status: 404 })
    }

    const updatedUser = {
      ...user,
      name,
      email,
      city,
      state,
    }

    customers[customers.indexOf(user)] = updatedUser

    return new HttpResponse(null, { status: 204 })
  },
)
