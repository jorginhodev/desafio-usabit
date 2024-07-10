import logoImg from '@/assets/images/logo.svg'
import { Input } from '@/components'

import * as S from './styles'

export function Header() {
  return (
    <S.Container>
      <img src={logoImg} alt="Logo Usabit Clientes" width={200} />

      <S.InputSearchContainer>
        <Input placeholder="Pesquise pelo nome" radius="25px" />
      </S.InputSearchContainer>
    </S.Container>
  )
}
