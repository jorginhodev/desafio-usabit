import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'
import { z } from 'zod'

import logoImg from '@/assets/images/logo.svg'
import { Input } from '@/components'

import * as S from './styles'

const schema = z.object({
  name: z.string().optional(),
})

export function Header() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { register } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: searchParams.get('name') ?? '',
    },
  })

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
      <img src={logoImg} alt="Logo Usabit Clientes" width={200} />

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
    </S.Container>
  )
}
