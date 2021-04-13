import React, { useContext, useEffect, useState } from 'react'
import { DeleteIcon, EditIcon } from '../../assets/Icons'
import { GlobalContext, TContext } from '../../context/globalContext'
import CloseButton from '../CloseButton'
import Flex from '../Flex'
import { ProfileSubTitle, ProfileTitle, Title } from '../Titles'
import { Naver, NaverPicture } from './styles'

type TUser = {
  id?: string
  name?: string
  ['admission_date']?: string
  ['job_role']?: string
  ['user_id']?: string
  project?: string
  birthdate?: string
  url?: string
}

const NaverProfile = ({ id }: any) => {
  const { naverList } = useContext(GlobalContext) as TContext
  const [naver, setNaver] = useState<TUser>({})

  useEffect(() => {
    const user = naverList.filter((item: any) => item.id === id)[0] as TUser
    setNaver(user)
  }, [])

  return (
    <Naver>
      <Flex width="50%">
        <NaverPicture />
      </Flex>
      <Flex
        column
        width="50%"
        pl="30px"
        pt="32px"
        pb="30px"
        position="relative"
      >
        <Title mb="10px">{naver.name}</Title>
        <ProfileSubTitle mb="24px">{naver.job_role}</ProfileSubTitle>
        <ProfileTitle mb="10px">Idade</ProfileTitle>
        <ProfileSubTitle mb="24px">{naver.birthdate}</ProfileSubTitle>
        <ProfileTitle mb="10px">Tempo de empresa</ProfileTitle>
        <ProfileSubTitle mb="24px">{naver.admission_date}</ProfileSubTitle>
        <ProfileTitle mb="10px">Projetos que participou</ProfileTitle>
        <ProfileSubTitle>{naver.project}</ProfileSubTitle>
        <Flex mt="auto">
          <DeleteIcon />
          <EditIcon />
        </Flex>
        <CloseButton />
      </Flex>
    </Naver>
  )
}

export default NaverProfile
