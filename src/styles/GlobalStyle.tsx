import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');
  
  * {
    color: #212121;
    font-family: "Montserrat", sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: none;
  }

  body {
    overflow-x: hidden;
  }
`

export default GlobalStyle
