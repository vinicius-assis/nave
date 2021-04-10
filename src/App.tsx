import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
// import Login from './components/Login'
import GlobalStyle from './styles/GlobalStyle'

const App = () => (
  <>
    <GlobalStyle />
    {/* <Login /> */}
    <Header />
    <Home />
  </>
)

export default App
