import { useQuery } from '@tanstack/react-query'
import { Link, useSearchParams } from 'react-router-dom'
import { z } from 'zod'

import { getCustomers } from '@/api/get-customers'
import { Button, Card, Pagination } from '@/components'

import * as S from './styles'

export function Home() {
  const [searchParams, setSearchParams] = useSearchParams()

  const name = searchParams.get('name')
  const pageIndex = z.coerce
    .number()
    .transform((page) => page - 1)
    .parse(searchParams.get('page') ?? '1')

  const { data: customersList } = useQuery({
    queryKey: ['customers', { name, pageIndex }],
    queryFn: () => getCustomers({ pageIndex, name }),
  })

  function handlePaginate(pageIndex: number) {
    setSearchParams((state) => {
      state.set('page', (pageIndex + 1).toString())

      return state
    })
  }

  return (
    <S.Container>
      <S.Header>
        <strong>{customersList?.pagination.totalCount} clientes</strong>

        <Link to="/new">
          <Button variant="transparent">Novo cliente</Button>
        </Link>
      </S.Header>

      <S.Separator />

      <S.CardList>
        {customersList?.data.map((customer) => (
          <Card key={customer.id} {...customer} />
        ))}
      </S.CardList>

      <S.PaginationContainer>
        {customersList && (
          <Pagination
            pageIndex={customersList.pagination.pageIndex}
            perPage={customersList.pagination.perPage}
            totalCount={customersList.pagination.totalCount}
            onPageChange={handlePaginate}
          />
        )}
      </S.PaginationContainer>
    </S.Container>
  )
}
