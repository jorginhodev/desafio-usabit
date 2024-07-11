import logoImg from '@/assets/images/logo.svg'

import * as S from './styles'

export function Header() {
  return (
    <S.Container>
      <img src={logoImg} alt="Logo Usabit Clientes" width={200} />
    </S.Container>
  )
}
