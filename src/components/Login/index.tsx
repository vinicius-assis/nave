import React from 'react'
import Flex from '../Flex/index'
import { NaveIcon, NaveLogo } from '../../assets/Icons'
import { LoginWrapper } from './styles'
import Button from '../Button'
import Label from '../Label'
import Input from '../Input'

const Login = () => (
  <LoginWrapper>
    <Flex justify="center" align="center" mb="40px">
      <NaveIcon />
      <NaveLogo />
    </Flex>
    <Flex column mb="32px">
      <Label>E-mail</Label>
      <Input type="email" placeholder="E-mail" />
    </Flex>
    <Flex column mb="32px">
      <Label>Senha</Label>
      <Input type="password" placeholder="Senha" />
    </Flex>
    <Button>Entrar</Button>
  </LoginWrapper>
)

export default Login
