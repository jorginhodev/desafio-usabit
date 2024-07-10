import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 32px;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  strong {
    color: ${({ theme }) => theme.colors.gray[900]};
    font-size: 24px;
  }
`

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.colors.gray[200]};
  opacity: 0.2;
  margin: 16px 0 32px;
`

export const CardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`
