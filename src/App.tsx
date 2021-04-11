import React from 'react'
// import CreateUserForm from './components/CreateUserForm'
import Header from './components/Header'
import Home from './components/Home'
import Layer from './components/Layer'
import Modal from './components/Modal'
// import NaverProfile from './components/NaverProfile'
// import Login from './components/Login'
import GlobalStyle from './styles/GlobalStyle'

const App = () => (
  <>
    <GlobalStyle />
    {/* <Login /> */}
    <Header />
    <Home />
    <Layer>
      {/* <NaverProfile /> */}
      <Modal />
    </Layer>
    {/* <CreateUserForm /> */}
  </>
)

export default App
