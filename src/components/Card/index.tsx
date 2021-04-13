import React, { useContext } from 'react'
import { DeleteIcon, EditIcon } from '../../assets/Icons'
import { GlobalContext, TContext } from '../../context/globalContext'
import Flex from '../Flex'
import { ProfileSubTitle, ProfileTitle } from '../Titles'
import { CardAction, CardImage } from './styles'

type TCardProps = {
  id: string
  name: string
  jobRole: string
  url: string
}

const Card = ({ id, name, jobRole, url }: TCardProps) => {
  const { handleOpenModal } = useContext(GlobalContext) as TContext

  return (
    <Flex maxWidth="280px" column id={id}>
      <CardImage onClick={() => handleOpenModal('show', id)} src={url} />
      <ProfileTitle>{name}</ProfileTitle>
      <ProfileSubTitle>{jobRole}</ProfileSubTitle>
      <Flex mb="40px">
        <CardAction onClick={() => handleOpenModal('confirm', id)}>
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
