import { ArrowLeft } from 'lucide-react'

import * as S from './styles'

export function New() {
  return (
    <S.Container>
      <S.Header to="/">
        <ArrowLeft />
        <span>Voltar</span>
      </S.Header>
    </S.Container>
  )
}
