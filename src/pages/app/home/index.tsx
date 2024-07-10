import { useQuery } from '@tanstack/react-query'
import { Link, useSearchParams } from 'react-router-dom'
import { z } from 'zod'

import { getClients } from '@/api/get-clients'
import { Button, Card, Pagination } from '@/components'

import * as S from './styles'

export function Home() {
  const [searchParams, setSearchParams] = useSearchParams()

  const name = searchParams.get('name')
  const pageIndex = z.coerce
    .number()
    .transform((page) => page - 1)
    .parse(searchParams.get('page') ?? '1')

  const { data: result } = useQuery({
    queryKey: ['clients', { name, pageIndex }],
    queryFn: () => getClients({ pageIndex: 1, name }),
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
        <strong>{result?.pagination.totalCount} clientes</strong>

        <Link to="/new">
          <Button variant="transparent">Novo cliente</Button>
        </Link>
      </S.Header>

      <S.Separator />

      <S.CardList>
        {result?.data.map((client) => <Card key={client.id} {...client} />)}
      </S.CardList>

      {result && (
        <Pagination
          pageIndex={result.pagination.pageIndex}
          perPage={result.pagination.perPage}
          totalCount={result.pagination.totalCount}
          onPageChange={handlePaginate}
        />
      )}
    </S.Container>
  )
}
