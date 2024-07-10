import { api } from '@/lib/axios'
import { Client } from '@/types'

type GetClientsRequest = {
  pageIndex?: number | null
  name?: string | null
}

export type GetClientsResponse = {
  data: Client[]
  pagination: {
    pageIndex: number
    perPage: number
    totalCount: number
  }
}

export async function getClients({ pageIndex, name }: GetClientsRequest) {
  const response = await api.get<GetClientsResponse>('/clients', {
    params: {
      pageIndex,
      name,
    },
  })

  return response.data
}
