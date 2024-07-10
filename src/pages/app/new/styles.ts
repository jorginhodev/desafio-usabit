import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 32px;
`

export const Header = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary.main};
  transition: filter 0.2s;

  span {
    font-weight: bold;
  }

  &:hover {
    opacity: 0.8;
  }
`
