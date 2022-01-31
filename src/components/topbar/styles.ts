import { Feather } from '@expo/vector-icons'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  height: 184px;
  background-color: ${({ theme }) => theme.colors.primary};
`

export const ContentWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: ${getStatusBarHeight() + RFValue(35)}px;
  padding: 0 24px;
`

export const UserWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const UserPicture = styled.Image`
  height: 48px;
  width: 48px;
  border-radius: 5px;
`

export const User = styled.View`
  margin-left: 16px;
`

export const Greeting = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(20)}px;
`

export const UserName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semibold};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.white};
`

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(24)}px;
`
