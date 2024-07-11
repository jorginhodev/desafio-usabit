import styled from 'styled-components'

export const Container = styled.div`
  margin: 32px 0 32px;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 24px;
  flex-direction: column;
`

export const InputSearchContainer = styled.div`
  width: 100%;
`

export const CustomersInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
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

export const PaginationContainer = styled.div`
  margin: 16px 0 32px;
`

export const NoCustomers = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 100%;
  color: ${({ theme }) => theme.colors.gray[200]};
`
