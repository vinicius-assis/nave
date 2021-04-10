import styled from 'styled-components'

type TitleProps = {
  ml?: string
}

const Title = styled.h1<TitleProps>`
  font-size: 24px;
  line-height: 36px;
  font-weight: bold;
  ${({ ml }) => (ml ? `margin-left: ${ml};` : '')}
`

export default Title
