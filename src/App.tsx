import React from 'react'
import CreateUserForm from './components/CreateUserForm'
import Header from './components/Header'
// import Home from './components/Home'
// import Login from './components/Login'
import GlobalStyle from './styles/GlobalStyle'

const App = () => (
  <>
    <GlobalStyle />
    {/* <Login /> */}
    <Header />
    {/* <Home /> */}
    <CreateUserForm />
  </>
)

export default App
