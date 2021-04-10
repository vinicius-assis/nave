import styled from 'styled-components'

const Button = styled.button`
  width: 100%;
  max-width: 384px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #212121;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  border: none;
  cursor: pointer;
  border: 1px solid currentColor;
  transition: 0.2s linear;

  &:hover {
    background-color: #fff;
    color: #212121;
    border: 1px solid currentColor;
  }
`

export default Button