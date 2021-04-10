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

export const LoginLabel = styled.label`
  font-size: 14px;
  font-weight: bold;
`

export const LoginInput = styled.input.attrs({
  placeholder: 'E-mail',
  type: 'email',
})`
  width: 100%;
  height: 40px;
  padding-left: 8px;
  color: #9e9e9e;
  font-size: 16px;
  border: 1px solid #424242;
`
