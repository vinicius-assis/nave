import React from 'react'
// import CreateUserForm from './components/CreateUserForm'
import Header from './components/Header'
import Home from './components/Home'
import Layer from './components/Layer'
import NaverDisplay from './components/NaverDisplay'
// import Login from './components/Login'
import GlobalStyle from './styles/GlobalStyle'

const App = () => (
  <>
    <GlobalStyle />
    {/* <Login /> */}
    <Header />
    <Home />
    <Layer>
      <NaverDisplay />
    </Layer>
    {/* <CreateUserForm /> */}
  </>
)

export default App
