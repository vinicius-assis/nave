import React from 'react'
import Home from './components/Home'
import Layer from './components/Layer'
import { GlobalStorage } from './context/globalContext'
import Login from './components/Login'
import GlobalStyle from './styles/GlobalStyle'

const App = () => (
  <GlobalStorage>
    <GlobalStyle />
    <Login />
    <Home />
    <Layer />
  </GlobalStorage>
)

export default App
