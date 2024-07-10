import { http, HttpResponse } from 'msw'

import { Customer } from '@/types'

import { GetCustomersResponse } from '../get-customers'

const customers: Customer[] = Array.from({ length: 15 }).map((_, i) => {
  return {
    id: String(i),
    name: `Customer ${i}`,
    email: `customer-${i}@mail.com`,
    city: 'New York',
    state: 'NY',
  }
})

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
