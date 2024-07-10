import { Pencil, Trash } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from '@/components'
import { Client } from '@/types'

import * as S from './styles'

type CardProps = Client

export function Card({ id, name, email, city, state }: CardProps) {
  return (
    <S.Container>
      <S.Info>
        <strong>{name}</strong>

        <span>{email}</span>
        <span>{`${city} - ${state}`}</span>
      </S.Info>

      <S.Actions>
        <Link to={`/edit/${id}`}>
          <Button variant="icon">
            <Pencil color="#5061FC" size={16} />
          </Button>
        </Link>

        <Button variant="icon">
          <Trash color="#FC5050" size={16} />
        </Button>
      </S.Actions>
    </S.Container>
  )
}
