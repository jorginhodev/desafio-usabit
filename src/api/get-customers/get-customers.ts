import { api } from '@/lib/axios'
import { Customer } from '@/types'

type GetCustomersRequest = {
  pageIndex?: number | null
  name?: string | null
}

export type GetCustomersResponse = {
  data: Customer[]
  pagination: {
    pageIndex: number
    perPage: number
    totalCount: number
  }
}

export async function getCustomers({ pageIndex, name }: GetCustomersRequest) {
  const response = await api.get<GetCustomersResponse>('/customers', {
    params: {
      pageIndex,
      name,
    },
  })

  return response.data
}
