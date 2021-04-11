import styled from 'styled-components'

export const CardImage = styled.img.attrs(({ src }) => ({
  src,
  alt: 'Employee picture',
}))`
  width: 100%;
  height: 280px;
  background-color: #ccc;
  margin-bottom: 16px;
`

export const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 4px;
`

export const CardSubTitle = styled.h5`
  font-size: 16px;
  font-weight: normal;
  margin-bottom: 14px;
`
export const CardAction = styled.button`
  background-color: unset;
  border: unset;
  cursor: pointer;
  margin-right: 10px;
`
