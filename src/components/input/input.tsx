import React, { forwardRef } from 'react'

import * as S from './styles'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  radius?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, radius, ...props }, ref) => {
    return (
      <S.Container
        type={type}
        className={className}
        borderRadius={radius}
        ref={ref}
        {...props}
      />
    )
  },
)

Input.displayName = 'Input'
