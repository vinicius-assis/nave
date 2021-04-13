import React, { useContext } from 'react'
import styled from 'styled-components'
import { CloseIcon } from '../../assets/Icons'
import { GlobalContext, TContext } from '../../context/globalContext'

const Button = styled.button`
  position: absolute;
  right: 30px;
  background-color: unset;
  border: none;
  cursor: pointer;
`

const CloseButton = () => {
  const { handleOpenModal } = useContext(GlobalContext) as TContext

  return (
    <Button onClick={() => handleOpenModal}>
      <CloseIcon />
    </Button>
  )
}
export default CloseButton
