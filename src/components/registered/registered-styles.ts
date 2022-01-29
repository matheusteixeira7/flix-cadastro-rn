import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View``

export const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 20px 20px;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.white};

  margin-left: 10px;

  flex: 1;
  flex-wrap: wrap;
`

export const Strong = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(12)}px;
`

export const FlixSymbol = styled.Image`
  height: 30px;
  width: 78px;
`

export const VerticalSeparator = styled.View`
  background-color: ${({ theme }) => theme.colors.gray_300};

  height: auto;
  width: 1px;

  align-self: stretch;
  margin-left: 10px;
`
