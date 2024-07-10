/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable import/export */
import { render, RenderOptions, RenderResult } from '@testing-library/react'
import React, { PropsWithChildren, ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'

import { theme } from '@/styles'

const AllTheProviders: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
): RenderResult => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'

export { customRender as render }
