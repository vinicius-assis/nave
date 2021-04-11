import styled from 'styled-components'

type TitleProps = {
  ml?: string
}

export const Title = styled.h1<TitleProps>`
  font-size: 24px;
  line-height: 36px;
  font-weight: bold;
  ${({ ml }) => (ml ? `margin-left: ${ml};` : '')}
`
export const ProfileTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 4px;
`

export const ProfileSubTitle = styled.h5`
  font-size: 16px;
  font-weight: normal;
  margin-bottom: 14px;
`
