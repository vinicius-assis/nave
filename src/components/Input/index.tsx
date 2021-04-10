import styled from 'styled-components'

type InputProps = {
  mb?: string
}

const Input = styled.input<InputProps>`
  width: 100%;
  height: 40px;
  padding-left: 8px;
  color: #9e9e9e;
  font-size: 16px;
  border: 1px solid #424242;
  ${({ mb }) => (mb ? `margin-bottom: ${mb};` : '')}
`
export default Input
