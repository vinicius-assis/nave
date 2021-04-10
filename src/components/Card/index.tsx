import React from 'react'
import { DeleteIcon, EditIcon } from '../../assets/Icons'
import Flex from '../Flex'
import { CardAction, CardImage, CardSubTitle, CardTitle } from './styles'

const Card = () => (
  <Flex maxWidth="280px" column>
    <CardImage />
    <CardTitle>Vinicius Assis</CardTitle>
    <CardSubTitle>Front-end Developer</CardSubTitle>
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
