import { api } from '@/lib/axios'
import { Customer } from '@/types'

export type EditCustomerBody = Customer

export async function editCustomer({
  id,
  name,
  email,
  city,
  state,
}: EditCustomerBody) {
  await api.patch(`/customers/${id}`, {
    name,
    email,
    city,
    state,
  })
}
