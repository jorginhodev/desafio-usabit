import { http, HttpResponse } from 'msw'

import { Client } from '@/types'

import { GetClientsResponse } from '../get-clients'

const clients: Client[] = Array.from({ length: 5 }).map((_, i) => {
  return {
    id: String(i),
    name: `Client ${i}`,
    email: `client-${i}@mail.com`,
    city: 'New York',
    state: 'NY',
  }
})

export const getClientsMock = http.get<never, never, GetClientsResponse>(
  '/clients',
  async ({ request }) => {
    const { searchParams } = new URL(request.url)

    const pageIndex = searchParams.get('pageIndex')
      ? Number(searchParams.get('pageIndex'))
      : 0
    const name = searchParams.get('name')

    let filteredClients = clients

    if (name) {
      filteredClients = filteredClients.filter((client) =>
        client.name.includes(name),
      )
    }

    const paginatedOrders = filteredClients.slice(
      pageIndex * 10,
      (pageIndex + 1) * 10,
    )

    return HttpResponse.json({
      data: paginatedOrders,
      pagination: {
        pageIndex,
        perPage: 10,
        totalCount: filteredClients.length,
      },
    })
  },
)
