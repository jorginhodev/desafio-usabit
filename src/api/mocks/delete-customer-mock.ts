import { http, HttpResponse } from 'msw'

import { DeleteCustomerBody } from '../delete-customer'
import { customers } from './customers'

export const deleteCustomerMock = http.delete<never, DeleteCustomerBody>(
  '/customers/:id',
  async ({ request }) => {
    const url = new URL(request.url)
    const customerId = url.pathname.split('/').pop()

    const user = customers.find((customer) => customer.id === customerId)

    if (!user) {
      return new HttpResponse(null, { status: 404 })
    }

    const index = customers.indexOf(user)
    customers.splice(index, 1)

    return new HttpResponse(null, { status: 200 })
  },
)
