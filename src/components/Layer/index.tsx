import React, { useContext } from 'react'
import styled from 'styled-components'
import { GlobalContext, TContext } from '../../context/globalContext'
import Modal from '../Modal'

const LayerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  top: 0;

  @media (max-width: 600px) {
    padding: 0 15px;
  }
`
const Layer = () => {
  const { openModal } = useContext(GlobalContext) as TContext

  if (!openModal) return null

  return (
    <LayerWrapper>
      <Modal />
    </LayerWrapper>
  )
}

export default Layer
