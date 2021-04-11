import styled from 'styled-components'

const Layer = styled.div`
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

export default Layer
