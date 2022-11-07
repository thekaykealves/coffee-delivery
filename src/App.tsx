import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { CoffeeContextProvider } from './contexts/CoffeeContext'
import lightTheme from './styles/themes/lightTheme'
import darkTheme from './styles/themes/darkTheme'
import { Header } from './components/Header'
import { usePersistedState } from './utils/usePersistedState'

export function App() {
  const [theme, setTheme] = usePersistedState('light', lightTheme)

  function toggleTheme() {
    setTheme(theme.name === 'light' ? darkTheme : lightTheme)
    localStorage.setItem('theme', JSON.stringify(theme))
  }

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CoffeeContextProvider>
          <Header toggleTheme={toggleTheme} />
          <Router />
        </CoffeeContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
