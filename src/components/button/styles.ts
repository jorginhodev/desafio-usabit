import styled, { css } from 'styled-components'

type ContainerProps = {
  $variant: 'primary' | 'danger' | 'transparent' | 'gray' | 'icon'
}

const variants = {
  primary: css`
    background: ${({ theme }) => theme.colors.primary.main};
    color: ${({ theme }) => theme.colors.white};
    border: none;

    &:hover {
      background: ${({ theme }) => theme.colors.primary.light};
    }
  `,
  danger: css`
    background: ${({ theme }) => theme.colors.danger.main};
    color: ${({ theme }) => theme.colors.white};
    border: none;

    &:hover {
      background: ${({ theme }) => theme.colors.danger.light};
    }
  `,
  transparent: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.primary.main};
    border: 2px solid ${({ theme }) => theme.colors.primary.main};

    &:hover {
      background: ${({ theme }) => theme.colors.primary.light};
      color: ${({ theme }) => theme.colors.white};
    }
  `,
  gray: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.gray['200']};
    border: none;

    &:hover {
      color: ${({ theme }) => theme.colors.gray['900']};
    }
  `,
  icon: css`
    background: transparent;
    border: none;
    padding: 0;

    & > svg {
      transition: all 0.2s ease-in;

      &:hover {
        filter: brightness(0.8);
      }
    }
  `,
}

export const Container = styled.button<ContainerProps>`
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 4px;
  transition: all 0.2s ease-in;

  ${({ $variant }) => variants[$variant]}
`
