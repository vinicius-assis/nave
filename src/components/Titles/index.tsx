import styled from 'styled-components'

type TitleProps = {
  ml?: string
  mr?: string
  mt?: string
  mb?: string
}

export const Title = styled.h1<TitleProps>`
  font-size: 24px;
  line-height: 36px;
  font-weight: bold;
  ${({ ml }) => (ml ? `margin-left: ${ml};` : '')}
  ${({ mr }) => (mr ? `margin-right: ${mr};` : '')}
  ${({ mt }) => (mt ? `margin-top: ${mt};` : '')}
  ${({ mb }) => (mb ? `margin-bottom: ${mb};` : '')}
`
export const ProfileTitle = styled.h3<TitleProps>`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 4px;
  ${({ ml }) => (ml ? `margin-left: ${ml};` : '')}
  ${({ mr }) => (mr ? `margin-right: ${mr};` : '')}
  ${({ mt }) => (mt ? `margin-top: ${mt};` : '')}
  ${({ mb }) => (mb ? `margin-bottom: ${mb};` : '')}
`

export const ProfileSubTitle = styled.h5<TitleProps>`
  font-size: 16px;
  font-weight: normal;
  margin-bottom: 14px;
  ${({ ml }) => (ml ? `margin-left: ${ml};` : '')}
  ${({ mr }) => (mr ? `margin-right: ${mr};` : '')}
  ${({ mt }) => (mt ? `margin-top: ${mt};` : '')}
  ${({ mb }) => (mb ? `margin-bottom: ${mb};` : '')}
`
