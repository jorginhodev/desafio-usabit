import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { ArrowLeft } from 'lucide-react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { z } from 'zod'

import { createCustomer } from '@/api/create-customer'
import { Button, Input } from '@/components'

import * as S from './styles'

const schema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  city: z.string().min(3),
  state: z.string().min(2),
})

type FormData = z.infer<typeof schema>

export function New() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const navigate = useNavigate()

  const { mutateAsync: createCustomerFn } = useMutation({
    mutationFn: createCustomer,
  })

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await createCustomerFn({
        name: data.name,
        email: data.email,
        city: data.city,
        state: data.state,
      })

      toast.success('Cliente cadastrado com sucesso!')
      navigate('/')
    } catch (error) {
      toast.error('Erro ao cadastrar cliente.')
    }
  }

  return (
    <S.Container>
      <S.BackButton to="/">
        <ArrowLeft />
        <span>Voltar</span>
      </S.BackButton>

      <S.Title>Novo Cliente</S.Title>

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
          disabled={!isValid || isSubmitting}
        >
          Cadastrar
        </Button>
      </S.Form>
    </S.Container>
  )
}
