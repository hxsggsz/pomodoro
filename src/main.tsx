import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import App from './App'
import { OptionsProvider } from './context/optionsContext'
import { GlobalStyle } from './styles/global'
import { purpleTheme } from './styles/themes/themes'
import { EggplantTheme } from './styles/themes/themes'
import { GreyTheme } from './styles/themes/themes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <OptionsProvider>
      <ThemeProvider theme={GreyTheme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </OptionsProvider>
  </React.StrictMode>,
)
