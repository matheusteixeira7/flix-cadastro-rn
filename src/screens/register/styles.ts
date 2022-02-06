import { Ionicons } from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler'
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  padding: 0 24px;
  flex: 1;
`

export const ReturnView = styled.Pressable`
  margin-top: ${getStatusBarHeight() + 24}px;
  margin-bottom: 16px;
`

export const Icon = styled(Ionicons)`
  color: ${({ theme }) => theme.colors.subtitle};
  font-size: ${RFValue(24)}px;
`

export const Title = styled.Text`
  margin-bottom: 32px;

  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.semibold};
  font-size: ${RFValue(20)}px;
`

export const FormScrollView = styled(ScrollView).attrs({
  showsVerticalScrollIndicator: false,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
})<any>`
  padding-top: 16px;
`

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  padding: 15px;

  margin-bottom: ${getBottomSpace()}px;
`
