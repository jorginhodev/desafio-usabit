import * as S from './styles'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'primary' | 'danger' | 'transparent' | 'gray' | 'icon'
}

export function Button({
  children,
  variant = 'primary',
  ...props
}: ButtonProps) {
  return (
    <S.Container $variant={variant} {...props}>
      {children}
    </S.Container>
  )
}
