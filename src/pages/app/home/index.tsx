import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQuery } from '@tanstack/react-query'
import { SearchX, TriangleAlert } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useSearchParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { z } from 'zod'

import { deleteCustomer } from '@/api/delete-customer'
import { getCustomers } from '@/api/get-customers'
import { Button, Card, Input, Modal, Pagination } from '@/components'
import { queryClient } from '@/lib/react-query'
import { Customer } from '@/types'

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
  const { onChange, ...rest } = register('name')

  const [showDeleteModalCustomer, setShowDeleteModalCustomer] = useState(false)
  const [customerBeingDeleted, setCustomerBeingDeleted] =
    useState<Customer | null>(null)

  const name = searchParams.get('name')
  const pageIndex = z.coerce
    .number()
    .transform((page) => page - 1)
    .parse(searchParams.get('page') ?? '1')

  const { data: customersList } = useQuery({
    queryKey: ['customers', { name, pageIndex }],
    queryFn: () => getCustomers({ pageIndex, name }),
  })

  const { mutate: deleteCustomerFn } = useMutation({
    mutationFn: deleteCustomer,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['customers'] })
    },
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

  function handleDeleteCustomer() {
    try {
      if (!customerBeingDeleted) {
        toast.error('Cliente não encontrado.')
        return
      }

      deleteCustomerFn({ id: customerBeingDeleted?.id })
      setShowDeleteModalCustomer(false)

      setCustomerBeingDeleted(null)

      toast.success('Cliente deletado com sucesso!')
    } catch (error) {
      toast.error('Erro ao deletar cliente.')
    }
  }

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
          <Card
            key={customer.id}
            {...customer}
            handleShowDeleteModal={setShowDeleteModalCustomer}
            handleCustomerBeingDeleted={setCustomerBeingDeleted}
          />
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

      <Modal
        danger
        visible={showDeleteModalCustomer}
        title={`Tem certeza que deseja remover o contato ${customerBeingDeleted?.name}?`}
        confirmLabel="Deletar"
        onCancel={() => setShowDeleteModalCustomer(false)}
        onConfirm={handleDeleteCustomer}
      >
        <S.ModalBody>
          <TriangleAlert size={16} />
          Esta ação não poderá ser desfeita!
        </S.ModalBody>
      </Modal>
    </S.Container>
  )
}
