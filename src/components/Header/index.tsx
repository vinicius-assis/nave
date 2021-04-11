import React, { useContext } from 'react'
import { Logout, NavWrapper } from './styles'
import { NaveIcon, NaveLogo } from '../../assets/Icons'
import Flex from '../Flex'
import Container from '../Container'
import { GlobalContext, TContext } from '../../context/globalContext'

const Header = () => {
  const { handleLogged } = useContext(GlobalContext) as TContext

  return (
    <Container>
      <NavWrapper>
        <Flex align="center" width="min-content">
          <NaveIcon small />
          <NaveLogo small />
        </Flex>
        <Flex width="min-content">
          <Logout onClick={handleLogged}>Sair</Logout>
        </Flex>
      </NavWrapper>
    </Container>
  )
}

export default Header
