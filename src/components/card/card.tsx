import { Pencil, Trash } from 'lucide-react'
import { Dispatch, SetStateAction } from 'react'
import { Link } from 'react-router-dom'

import { Button } from '@/components'
import { Customer } from '@/types'

import * as S from './styles'

type CardProps = Customer & {
  handleShowDeleteModal: Dispatch<SetStateAction<boolean>>
  handleCustomerBeingDeleted: Dispatch<SetStateAction<Customer | null>>
}

export function Card({
  id,
  name,
  email,
  city,
  state,
  handleShowDeleteModal,
  handleCustomerBeingDeleted,
}: CardProps) {
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

        <Button
          variant="icon"
          onClick={() => {
            handleShowDeleteModal(true)
            handleCustomerBeingDeleted({
              id,
              name,
              email,
              city,
              state,
            })
          }}
        >
          <Trash color="#FC5050" size={16} />
        </Button>
      </S.Actions>
    </S.Container>
  )
}
