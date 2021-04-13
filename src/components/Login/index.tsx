import React, { useContext, useState } from 'react'
import Flex from '../Flex/index'
import { NaveIcon, NaveLogo } from '../../assets/Icons'
import { LoginWrapper } from './styles'
import Button from '../Button'
import Label from '../Label'
import Input from '../Input'
import { GlobalContext, TContext } from '../../context/globalContext'
import { LOGIN } from '../../utils/requests'
import { ErrorMessage } from '../CreateUserForm/styles'

type TUserInfos = {
  email: string
  password: string
}

const Login = () => {
  const { logged, handleLogged, setToken } = useContext(
    GlobalContext
  ) as TContext
  const [userInfos, setUserInfos] = useState<TUserInfos>({
    email: '',
    password: '',
  })
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  if (logged) return null

  const removeError = () => setError(false)

  const handleSubmit = async () => {
    setLoading(true)
    const { email, password } = userInfos
    if (!email || !password) {
      setError(true)
      return
    }
    const response = await LOGIN(userInfos.email, userInfos.password)

    if (!response) {
      setError(true)
      setLoading(false)
      return
    }

    response && setToken(response)
    setLoading(false)
    handleLogged()
  }

  return loading ? (
    <h1>Carregando</h1>
  ) : (
    <LoginWrapper>
      <Flex justify="center" align="center" mb="40px">
        <NaveIcon />
        <NaveLogo />
      </Flex>
      <Flex column mb="32px">
        <Label>E-mail </Label>
        <Input
          type="email"
          placeholder="E-mail"
          value={userInfos.email}
          onChange={(e) =>
            setUserInfos({ ...userInfos, email: e.target.value })
          }
          onFocus={removeError}
        />
      </Flex>
      <Flex column mb="32px" position="relative">
        <Label>Senha</Label>
        <Input
          type="password"
          placeholder="Senha"
          value={userInfos.password}
          onChange={(e) =>
            setUserInfos({ ...userInfos, password: e.target.value })
          }
          onFocus={removeError}
        />
        {error && <ErrorMessage>Email ou senha Incorretos</ErrorMessage>}
      </Flex>
      <Button onClick={handleSubmit}>Entrar</Button>
    </LoginWrapper>
  )
}

export default Login
