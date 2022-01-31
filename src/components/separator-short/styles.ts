import styled from 'styled-components/native'

export const Container = styled.View`
  height: 2px;
  width: 43px;
  background-color: ${({ theme }) => theme.colors.gray_200};

  margin-bottom: 24px;
  align-self: center;

  border-radius: 1px;
`
