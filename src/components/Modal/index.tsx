import React from 'react'
import styled from 'styled-components'
import FeedbackMessage from '../FeedbackMessage'

const ModalWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 592px;
  padding: 32px;
  background-color: #fff;
`

const Modal = () => (
  <ModalWrapper>
    <FeedbackMessage type="delete" />
  </ModalWrapper>
)

export default Modal
