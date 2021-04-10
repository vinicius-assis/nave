import React from 'react'
import Flex from '../Flex/index'
import { NaveIcon, NaveLogo } from '../../assets/Icons'
import { LoginInput, LoginLabel, LoginWrapper } from './styles'
import Button from '../Button'

const Login = () => (
  <LoginWrapper>
    <Flex justify="center" align="center" mb="40px">
      <NaveIcon />
      <NaveLogo />
    </Flex>
    <Flex column mb="32px">
      <LoginLabel>E-mail</LoginLabel>
      <LoginInput />
    </Flex>
    <Flex column mb="32px">
      <LoginLabel>Senha</LoginLabel>
      <LoginInput />
    </Flex>
    <Button>Entrar</Button>
  </LoginWrapper>
)

export default Login
