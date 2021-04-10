import styled from 'styled-components'

type FlexProps = {
  width?: string
  column?: boolean
  justify?: string
  align?: string
  margin?: string
  mb?: string
  mt?: string
  mr?: string
  ml?: string
}

const Flex = styled.div<FlexProps>`
  display: flex;
  ${({ width }) => (width ? `width: ${width};` : '100%;')}
  ${({ column }) => (column ? 'flex-direction: column;' : '')}
  ${({ justify }) => (justify ? `justify-content: ${justify};` : '')}
  ${({ align }) => (align ? `align-items: ${align};` : '')}
  ${({ margin }) => (margin ? `margin: ${margin};` : '')}
  ${({ mb }) => (mb ? `margin-bottom: ${mb};` : '')}
  ${({ mt }) => (mt ? `margin-top: ${mt};` : '')}
  ${({ mr }) => (mr ? `margin-right: ${mr};` : '')}
  ${({ ml }) => (ml ? `margin-left: ${ml};` : '')}
`

export default Flex
