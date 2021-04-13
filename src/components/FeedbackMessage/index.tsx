import React, { useContext } from 'react'
import { GlobalContext, TContext } from '../../context/globalContext'
import Button from '../Button'
import CloseButton from '../CloseButton'
import Flex from '../Flex'
import { ProfileSubTitle, Title } from '../Titles'
import { DELETENAVER } from '../../utils/requests'

type FeedbackMessageProps = {
  type: string
  id: string
}

type TMessages = {
  create: TMessageData
  delete: TMessageData
  update: TMessageData
  confirm: TMessageData
}

type TMessageData = {
  title: string
  content: string
}

const FeedbackMessage = ({ type, id }: FeedbackMessageProps) => {
  const { handleOpenModal, token } = useContext(GlobalContext) as TContext

  if (!type) return null

  const messages: TMessages = {
    create: {
      title: 'Naver Criado',
      content: 'Naver criado com sucesso!',
    },
    delete: {
      title: 'Naver excluído',
      content: 'Naver excluído com sucesso!',
    },
    update: {
      title: 'Naver atualizado',
      content: 'Naver atualizado com sucesso!',
    },
    confirm: {
      title: 'Excluir Naver',
      content: 'Tem certeza que deseja excluir este Naver?',
    },
  }

  const { title, content } = messages[type as keyof TMessages]

  return (
    <>
      <Flex mb="24px">
        <Title>{title}</Title>
        {type !== 'confirm' && <CloseButton />}
      </Flex>
      <Flex>
        <ProfileSubTitle>{content}</ProfileSubTitle>
      </Flex>
      {type === 'confirm' && (
        <Flex justify="flex-end">
          <Button light small mr="24px" onClick={() => handleOpenModal()}>
            Cancelar
          </Button>
          <Button small onClick={() => DELETENAVER(token, id, handleOpenModal)}>
            Excluir
          </Button>
        </Flex>
      )}
    </>
  )
}

export default FeedbackMessage
