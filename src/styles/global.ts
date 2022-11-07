import { createGlobalStyle } from 'styled-components'
import { ThemeType } from '../@types/styled'

export const GlobalStyle = createGlobalStyle<ThemeType>`
  html {
    scroll-behavior: smooth;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 0;
  }

  body {
    background-color: ${(props) => props.theme.colors['base-50']};
    color: ${(props) => props.theme.colors['base-900']};
    -webkit-font-smoothing: antialiased;
    padding: 0rem 6rem;

    @media (min-width: 1536px) {
      padding: 0rem 20rem;
    }
  }
  
  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`
