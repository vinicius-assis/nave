import React from 'react'
import { DeleteIcon, EditIcon } from '../../assets/Icons'
import Flex from '../Flex'
import { ProfileSubTitle, ProfileTitle } from '../Titles'
import { CardAction, CardImage } from './styles'

const Card = () => (
  <Flex maxWidth="280px" column>
    <CardImage />
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

export default Card
