import React from 'react'
import { ArrowIcon } from '../../assets/Icons'
import Button from '../Button'
import Container from '../Container'
import Flex from '../Flex'
import Input from '../Input'
import Label from '../Label'
import Title from '../Title'
import { CreateForm } from './styles'

const CreateUserForm = () => (
  <Container mt="48px">
    <Flex justify="center">
      <CreateForm>
        <Flex mb="54px" align="center">
          <ArrowIcon />
          <Title ml="22px">Adicionar Naver</Title>
        </Flex>
        <Flex column width="50%" maxWidth="280px">
          <Label htmlFor="name">Nome</Label>
          <Input mb="32px" id="name" type="text" placeholder="Nome" />
          <Label htmlFor="age">Idate</Label>
          <Input mb="32px" id="age" type="text" placeholder="Idade" />
          <Label htmlFor="projects">Projetos que participou</Label>
          <Input
            mb="32px"
            id="projects"
            type="text"
            placeholder="Projetos que participou"
          />
        </Flex>
        <Flex column width="50%" maxWidth="280px">
          <Label htmlFor="role">Cargo</Label>
          <Input mb="32px" id="role" type="text" placeholder="Cargo" />
          <Label htmlFor="company-years">Tempo de empresa</Label>
          <Input
            mb="32px"
            id="company-years"
            type="text"
            placeholder="Tempo de empresa"
          />
          <Label htmlFor="picture-url">Url da foto do Naver</Label>
          <Input
            mb="32px"
            id="picture-url"
            type="text"
            placeholder="Url da foto do Naver"
          />
        </Flex>
        <Flex justify="flex-end">
          <Button small>Salvar</Button>
        </Flex>
      </CreateForm>
    </Flex>
  </Container>
)

export default CreateUserForm
