import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Text = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.gray[900]};
`

export const PaginationGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  @media (min-width: 1024px) {
    gap: 32px;
  }
`

export const PageIndicator = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
`

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  button {
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
