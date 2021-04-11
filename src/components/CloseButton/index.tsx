import React from 'react'
import styled from 'styled-components'
import { CloseIcon } from '../../assets/Icons'

const Button = styled.button`
  position: absolute;
  right: 30px;
  background-color: unset;
  border: none;
  cursor: pointer;
`

const CloseButton = () => (
  <Button>
    <CloseIcon />
  </Button>
)
export default CloseButton
