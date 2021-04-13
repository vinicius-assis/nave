import React, { useContext, useEffect } from 'react'
import { GlobalContext, TContext } from '../../context/globalContext'
import { GETNAVERS } from '../../utils/requests'
import Button from '../Button'
import Card from '../Card'
import Container from '../Container'
import CreateUserForm from '../CreateUserForm'
import Flex from '../Flex'
import Header from '../Header'
import { Grid, HomeTitle } from './styles'

const Home = () => {
  const {
    logged,
    openForm,
    handleOpenForm,
    token,
    naverList,
    setNaverList,
  } = useContext(GlobalContext) as TContext

  useEffect(() => {
    if (logged) {
      const getNavers = async () => {
        const response = await GETNAVERS(token as string)
        if (!response) return
        setNaverList(response.data)
      }

      getNavers()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [logged, naverList])

  if (!logged) {
    return null
  }

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
            {naverList &&
              naverList.map((naver: any) => (
                <Card
                  id={naver.id}
                  key={naver.id}
                  name={naver.name}
                  jobRole={naver.job_role}
                  url={naver.url}
                />
              ))}
          </Grid>
        </Container>
      )}
    </>
  )
}

export default Home
