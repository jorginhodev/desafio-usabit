import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 32px;
`

export const BackButton = styled(Link)`
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

export const Title = styled.h1`
  margin-top: 8px;
  font-size: 24px;
  font-weight: bold;
`

export const Form = styled.form`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  & > button {
    width: 100%;
    height: 52px;
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`
