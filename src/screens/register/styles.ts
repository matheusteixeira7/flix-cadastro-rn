import { ScrollView } from 'react-native-gesture-handler'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  margin-top: ${getStatusBarHeight() + 24}px;
  padding: 0 24px;
  flex: 1;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.semibold};
  font-size: ${RFValue(20)}px;
  text-align: center;
`

export const Form = styled(ScrollView).attrs({
  showsVerticalScrollIndicator: false,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
})<any>``
