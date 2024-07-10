import styled from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  padding: 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Info = styled.div`
  strong {
    display: flex;
    align-items: center;
  }

  span {
    display: block;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray[200]};
  }
`

export const Actions = styled.div`
  display: flex;
  align-items: center;

  button {
    background: transparent;
    border: none;
    margin-left: 8px;
  }
`
