import React, { useContext } from 'react'
import { GlobalContext, TContext } from '../../context/globalContext'
import Button from '../Button'
import Card from '../Card'
import Container from '../Container'
import CreateUserForm from '../CreateUserForm'
import Flex from '../Flex'
import Header from '../Header'
import { Grid, HomeTitle } from './styles'

const Home = () => {
  const { logged, openForm, handleOpenForm } = useContext(
    GlobalContext
  ) as TContext

  if (!logged) return null

  return (
    <>
      <Header />
      {openForm ? (
        <CreateUserForm />
      ) : (
        <Container mt="70px" column>
          <Flex width="100%" mb="40px" justify="space-between" align="center">
            <HomeTitle>Navers</HomeTitle>
            <Button small onClick={handleOpenForm}>
              Adicionar Naver
            </Button>
          </Flex>
          <Grid>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </Grid>
        </Container>
      )}
    </>
  )
}

export default Home
