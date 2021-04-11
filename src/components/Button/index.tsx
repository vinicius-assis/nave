import styled from 'styled-components'

type ButtonProps = {
  small?: boolean
  light?: boolean
  mt?: string
  mb?: string
  mr?: string
  ml?: string
}

const Button = styled.button<ButtonProps>`
  width: 100%;
  max-width: ${({ small }) => (small ? '176px' : '384px')};
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ light }) => (light ? '#fff' : '#212121')};
  color: ${({ light }) => (light ? '#212121' : '#fff')};
  font-weight: bold;
  font-size: 14px;
  border: none;
  cursor: pointer;
  border: 1px solid #212121;
  transition: 0.2s linear;
  ${({ mt }) => (mt ? `margin-top: ${mt};` : '')}
  ${({ mb }) => (mb ? `margin-bottom: ${mb};` : '')}
  ${({ mr }) => (mr ? `margin-right: ${mr};` : '')}
  ${({ ml }) => (ml ? `margin-left: ${ml};` : '')}

  &:hover {
    background-color: ${({ light }) => (light ? '#212121' : '#fff')};
    color: ${({ light }) => (light ? '#fff' : '#212121')};
  }
`

export default Button
