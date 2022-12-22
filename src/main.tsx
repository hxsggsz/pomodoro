import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import App from './App'
import { OptionsProvider } from './context/optionsContext'
import { AnimatePresence, } from 'framer-motion'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <OptionsProvider>

      <App />
    </OptionsProvider>

  </React.StrictMode >,
)
