import styled from 'styled-components'

type ContainerProps = {
  column?: boolean
  mt?: string
  mb?: string
}

const Container = styled.div<ContainerProps>`
  width: 100vw;
  max-width: 1280px;
  padding: 0 32px;
  display: flex;
  ${({ column }) => (column ? 'flex-direction: column;' : '')}
  margin: 0 auto;
  ${({ mt }) => (mt ? `margin-top: ${mt}` : '')}
  ${({ mb }) => (mb ? `margin-bottom: ${mb}` : '')}
`

export default Container
