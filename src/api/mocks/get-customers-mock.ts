import { http, HttpResponse } from 'msw'

import { GetCustomersResponse } from '../get-customers'
import { customers } from './customers'

export const getCustomersMock = http.get<never, never, GetCustomersResponse>(
  '/customers',
  async ({ request }) => {
    const { searchParams } = new URL(request.url)

    const pageIndex = searchParams.get('pageIndex')
      ? Number(searchParams.get('pageIndex'))
      : 0
    const name = searchParams.get('name')

    let filteredCustomers = customers

    if (name) {
      filteredCustomers = filteredCustomers.filter((customer) =>
        customer.name.includes(name),
      )
    }

    const paginatedCustomers = filteredCustomers.slice(
      pageIndex * 10,
      (pageIndex + 1) * 10,
    )

    return HttpResponse.json({
      data: paginatedCustomers,
      pagination: {
        pageIndex,
        perPage: 10,
        totalCount: filteredCustomers.length,
      },
    })
  },
)
