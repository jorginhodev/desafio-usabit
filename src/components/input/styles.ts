import styled from 'styled-components'

interface ContainerProps {
  borderRadius?: string
}

export const Container = styled.input<ContainerProps>`
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: ${({ borderRadius }) => borderRadius || '4px'};
  height: 50px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  outline: 0;
  padding: 0 16px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[200]};
  }
`
