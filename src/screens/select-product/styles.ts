import { Ionicons } from '@expo/vector-icons'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  margin-top: ${getStatusBarHeight() + 24}px;
  padding: 0 16px;
`

export const ReturnView = styled.Pressable`
  margin-bottom: 16px;
`

export const Icon = styled(Ionicons)`
  color: ${({ theme }) => theme.colors.subtitle};
  font-size: ${RFValue(24)}px;
`
