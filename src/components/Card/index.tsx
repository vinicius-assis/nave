import React, { useContext } from 'react'
import { DeleteIcon, EditIcon } from '../../assets/Icons'
import { GlobalContext, TContext } from '../../context/globalContext'
import Flex from '../Flex'
import { ProfileSubTitle, ProfileTitle } from '../Titles'
import { CardAction, CardImage } from './styles'

const Card = () => {
  const { handleOpenModal } = useContext(GlobalContext) as TContext

  return (
    <Flex maxWidth="280px" column>
      <CardImage onClick={handleOpenModal} />
      <ProfileTitle>Vinicius Assis</ProfileTitle>
      <ProfileSubTitle>Front-end Developer</ProfileSubTitle>
      <Flex mb="40px">
        <CardAction>
          <DeleteIcon />
        </CardAction>
        <CardAction>
          <EditIcon />
        </CardAction>
      </Flex>
    </Flex>
  )
}

export default Card
