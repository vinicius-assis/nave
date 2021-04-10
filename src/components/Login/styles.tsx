import styled from 'styled-components'

export const LoginWrapper = styled.div`
  width: 100%;
  max-width: 448px;
  max-height: 408px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 32px;
  border: 1px solid #212121;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  & > div > svg {
    margin: 0 8px;
  }
`
