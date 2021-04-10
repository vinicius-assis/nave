import React from 'react'
import { Logout, NavWrapper } from './styles'
import { NaveIcon, NaveLogo } from '../../assets/Icons'
import Flex from '../Flex'
import Container from '../Container'

const Header = () => (
  <Container>
    <NavWrapper>
      <Flex align="center" width="min-content">
        <NaveIcon small />
        <NaveLogo small />
      </Flex>
      <Flex width="min-content">
        <Logout>Sair</Logout>
      </Flex>
    </NavWrapper>
  </Container>
)

export default Header
