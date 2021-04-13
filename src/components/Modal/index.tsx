import React, { useContext } from 'react'
import styled from 'styled-components'
import { GlobalContext, TContext } from '../../context/globalContext'
import FeedbackMessage from '../FeedbackMessage'

const ModalWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 592px;
  padding: 32px;
  background-color: #fff;
`

const Modal = () => {
  const {
    modalAction: { action, id },
  } = useContext(GlobalContext) as TContext

  return (
    <ModalWrapper>
      <FeedbackMessage type={action} id={id} />
    </ModalWrapper>
  )
}

export default Modal
