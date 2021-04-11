import React, { useContext } from 'react'
import styled from 'styled-components'
import { ArrowIcon } from '../../assets/Icons'
import { GlobalContext, TContext } from '../../context/globalContext'

const Button = styled.button`
  background-color: unset;
  border: none;
  cursor: pointer;
`

const BackButton = () => {
  const { handleOpenForm } = useContext(GlobalContext) as TContext
  return (
    <Button onClick={handleOpenForm}>
      <ArrowIcon />
    </Button>
  )
}

export default BackButton
