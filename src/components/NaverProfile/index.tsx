import React from 'react'
import { DeleteIcon, EditIcon } from '../../assets/Icons'
import CloseButton from '../CloseButton'
import Flex from '../Flex'
import { ProfileSubTitle, ProfileTitle, Title } from '../Titles'
import { Naver, NaverPicture } from './styles'

const NaverProfile = () => (
  <Naver>
    <Flex width="50%">
      <NaverPicture />
    </Flex>
    <Flex column width="50%" pl="30px" pt="32px" pb="30px" position="relative">
      <Title mb="10px">Vinicius</Title>
      <ProfileSubTitle mb="24px">Front-end Developer</ProfileSubTitle>
      <ProfileTitle mb="10px">Idade</ProfileTitle>
      <ProfileSubTitle mb="24px">Lorem Ipsum</ProfileSubTitle>
      <ProfileTitle mb="10px">Tempo de empresa</ProfileTitle>
      <ProfileSubTitle mb="24px">Lorem Ipsum</ProfileSubTitle>
      <ProfileTitle mb="10px">Projetos que participou</ProfileTitle>
      <ProfileSubTitle>Lorem Ipsum</ProfileSubTitle>
      <Flex mt="auto">
        <DeleteIcon />
        <EditIcon />
      </Flex>
      <CloseButton />
    </Flex>
  </Naver>
)

export default NaverProfile
