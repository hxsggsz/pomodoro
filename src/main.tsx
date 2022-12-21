import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import App from './App'
import { OptionsProvider } from './context/optionsContext'
import { GlobalStyle } from './styles/global'
import { purpleTheme } from './styles/themes/themes'
import { EggplantTheme } from './styles/themes/themes'
import { GreyTheme } from './styles/themes/themes'
import { ColorModeContext } from './context/ColorModeContex'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>

    <OptionsProvider>

      <App />
    </OptionsProvider>

  </React.StrictMode>,
)
