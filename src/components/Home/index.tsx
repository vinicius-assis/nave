import React from 'react'
import Button from '../Button'
import Card from '../Card'
import Container from '../Container'
import Flex from '../Flex'
import { Grid, HomeTitle } from './styles'

const Home = () => (
  <Container mt="70px" column>
    <Flex width="100%" mb="40px" justify="space-between" align="center">
      <HomeTitle>Navers</HomeTitle>
      <Button small>Adicionar Naver</Button>
    </Flex>
    <Grid>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Grid>
  </Container>
)

export default Home
