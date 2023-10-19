import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider} from 'styled-components'
import GlobalStyles from './Styles/global'
import theme from './Styles/theme'

import {Details} from './Pages/Details'
import Button from './components'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Details />
      <Button />
    </ThemeProvider>
  </React.StrictMode>,
)
