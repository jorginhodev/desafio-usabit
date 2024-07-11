import { faker } from '@faker-js/faker'

import { Customer } from '@/types'

const customersList: Customer[] = Array.from({ length: 15 }).map((_, i) => {
  return {
    id: String(i),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    city: faker.location.city(),
    state: faker.location.state(),
  }
})

export const customers = customersList
