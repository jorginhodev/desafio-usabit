import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`

const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: bold;
`

const Text = styled.p`
  color: ${({ theme }) => theme.colors.gray[200]};
`

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary.light};
  &:hover {
    color: ${({ theme }) => theme.colors.primary.main};
  }
`

export function NotFound() {
  return (
    <Container>
      <Title>Página não encontrada</Title>
      <Text>
        Voltar para <StyledLink to="/">Home</StyledLink>
      </Text>
    </Container>
  )
}
