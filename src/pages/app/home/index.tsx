import { zodResolver } from '@hookform/resolvers/zod'
import { useQuery } from '@tanstack/react-query'
import { SearchX } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { Link, useSearchParams } from 'react-router-dom'
import { z } from 'zod'

import { getCustomers } from '@/api/get-customers'
import { Button, Card, Input, Pagination } from '@/components'

import * as S from './styles'

const schema = z.object({
  name: z.string().optional(),
})

export function Home() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { register } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: searchParams.get('name') ?? '',
    },
  })

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

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    const name = event.target.value

    setSearchParams((state) => {
      state.set('name', name)
      state.set('page', '1')
      return state
    })
  }

  const { onChange, ...rest } = register('name')

  return (
    <S.Container>
      <S.Header>
        <S.InputSearchContainer>
          <Input
            placeholder="Pesquise pelo nome"
            radius="25px"
            onChange={(event) => {
              onChange(event)
              handleSearchChange(event)
            }}
            {...rest}
          />
        </S.InputSearchContainer>

        <S.CustomersInfo>
          <strong>{customersList?.pagination.totalCount} clientes</strong>

          <Link to="/new">
            <Button variant="transparent">Novo cliente</Button>
          </Link>
        </S.CustomersInfo>
      </S.Header>

      <S.Separator />

      <S.CardList>
        {customersList?.data.map((customer) => (
          <Card key={customer.id} {...customer} />
        ))}
      </S.CardList>

      {!customersList && (
        <S.NoCustomers>
          <p>Erro ao carregar dados</p>
        </S.NoCustomers>
      )}

      {customersList && customersList.pagination.totalCount > 0 && (
        <S.PaginationContainer>
          <Pagination
            pageIndex={customersList.pagination.pageIndex}
            perPage={customersList.pagination.perPage}
            totalCount={customersList.pagination.totalCount}
            onPageChange={handlePaginate}
          />
        </S.PaginationContainer>
      )}

      {name && customersList?.pagination.totalCount === 0 && (
        <S.NoCustomers>
          <SearchX color="#FC5050" size={18} />
          <p>
            Nenhum resultado foi encontrado para o termo{' '}
            <strong>&quot;{name}&quot;</strong>.
          </p>
        </S.NoCustomers>
      )}

      {!name && customersList?.pagination.totalCount === 0 && (
        <S.NoCustomers>
          <p>Nenhum cliente encontrado.</p>
        </S.NoCustomers>
      )}
    </S.Container>
  )
}
