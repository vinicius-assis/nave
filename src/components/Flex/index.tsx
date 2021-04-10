import styled from 'styled-components'

type FlexProps = {
  width?: string
  maxWidth?: string
  justify?: string
  align?: string
  margin?: string
  mb?: string
  mt?: string
  mr?: string
  ml?: string
  column?: boolean
  wrap?: boolean
}

const Flex = styled.div<FlexProps>`
  display: flex;
  ${({ width }) => (width ? `width: ${width};` : 'width: 100%;')}
  ${({ maxWidth }) => (maxWidth ? `max-width: ${maxWidth};` : '')}
  ${({ column }) => (column ? 'flex-direction: column;' : '')}
  ${({ wrap }) => (wrap ? 'flex-wrap: wrap;' : '')}
  ${({ justify }) => (justify ? `justify-content: ${justify};` : '')}
  ${({ align }) => (align ? `align-items: ${align};` : '')}
  ${({ margin }) => (margin ? `margin: ${margin};` : '')}
  ${({ mb }) => (mb ? `margin-bottom: ${mb};` : '')}
  ${({ mt }) => (mt ? `margin-top: ${mt};` : '')}
  ${({ mr }) => (mr ? `margin-right: ${mr};` : '')}
  ${({ ml }) => (ml ? `margin-left: ${ml};` : '')}
`

export default Flex
