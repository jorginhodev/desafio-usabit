import { api } from '@/lib/axios'
import { Customer } from '@/types'

export type CreateCustomerBody = Omit<Customer, 'id'>

export async function createCustomer({
  name,
  email,
  city,
  state,
}: CreateCustomerBody) {
  await api.post('/customers', { name, email, city, state })
}
