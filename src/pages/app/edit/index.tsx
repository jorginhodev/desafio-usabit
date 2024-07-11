import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { ArrowLeft } from 'lucide-react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { z } from 'zod'

import { editCustomer } from '@/api/edit-customer'
import { customers } from '@/api/mocks/customers'
import { Button, Input } from '@/components'

import * as S from './styles'

const schema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  city: z.string().min(3),
  state: z.string().min(2),
})

type FormData = z.infer<typeof schema>

export function Edit() {
  const { id } = useParams()
  const customerData = customers.find((customer) => customer.id === id)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isValid, isDirty },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: customerData?.name || '',
      email: customerData?.email || '',
      city: customerData?.city || '',
      state: customerData?.state || '',
    },
  })

  const navigate = useNavigate()

  const { mutateAsync: editCustomerFn } = useMutation({
    mutationFn: editCustomer,
  })

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      if (!customerData) {
        toast.error('Cliente não encontrado.')
        return
      }

      await editCustomerFn({
        id: customerData.id,
        name: data.name,
        email: data.email,
        city: data.city,
        state: data.state,
      })

      toast.success('Cliente editado com sucesso!')
      navigate('/')
    } catch (error) {
      toast.error('Erro ao editar cliente.')
    }
  }

  return (
    <S.Container>
      <S.BackButton to="/">
        <ArrowLeft />
        <span>Voltar</span>
      </S.BackButton>

      <S.Title>Editar Cliente</S.Title>

      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <Input placeholder="Nome" required {...register('name')} />
        <Input
          placeholder="Email"
          required
          type="email"
          {...register('email')}
        />
        <Input placeholder="Cidade" required {...register('city')} />
        <Input placeholder="Estado" required {...register('state')} />

        <Button
          type="submit"
          variant="primary"
          disabled={isSubmitting || !isValid || !isDirty}
        >
          Editar
        </Button>
      </S.Form>
    </S.Container>
  )
}
