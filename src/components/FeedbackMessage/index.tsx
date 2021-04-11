import React from 'react'
import CloseButton from '../CloseButton'
import Flex from '../Flex'
import { ProfileSubTitle, Title } from '../Titles'

type FeedbackMessageProps = {
  type: keyof TMessages
}

type TMessages = {
  create: TMessageData
  delete: TMessageData
  update: TMessageData
}

type TMessageData = {
  title: string
  content: string
}

const FeedbackMessage = ({ type }: FeedbackMessageProps) => {
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
  }

  const { title, content } = messages[type]

  return (
    <>
      <Flex mb="24px">
        <Title>{title}</Title>
        <CloseButton />
      </Flex>
      <Flex>
        <ProfileSubTitle>{content}</ProfileSubTitle>
      </Flex>
    </>
  )
}

export default FeedbackMessage
