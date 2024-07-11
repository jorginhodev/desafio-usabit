import { api } from '@/lib/axios'

export type DeleteCustomerBody = {
  id: string
}

export async function deleteCustomer({ id }: DeleteCustomerBody) {
  await api.delete(`/customers/${id}`)
}
