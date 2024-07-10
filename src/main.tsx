import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import { App } from '@/app'
import { GlobalStyles, theme } from '@/styles'

import { enableMocks } from './api/mocks'

enableMocks().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </React.StrictMode>,
  )
})
