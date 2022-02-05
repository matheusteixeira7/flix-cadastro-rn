import { Feather } from '@expo/vector-icons'
import { Platform } from 'react-native'
import { getBottomSpace } from 'react-native-iphone-x-helper'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`

export const Background = styled.Pressable`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.modal_transparent};
`

export const ModalView = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  padding-bottom: ${Platform.OS === 'ios'
    ? getBottomSpace()
    : getBottomSpace() + 16}px;
`

export const ModalWrapper = styled.View`
  padding: 12px 24px 0;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.title};
  text-align: center;
`

export const ClientName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semibold};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.title};
  text-align: center;
`

export const ButtonsWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const DeleteRegister = styled.TouchableOpacity`
  flex-direction: row;
  align-content: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.attention};
  margin-top: 16px;
`

export const DeleteText = styled.Text`
  color: ${({ theme }) => theme.colors.attention};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(15)}px;
  margin-left: 11px;
`

export const Icon = styled(Feather)`
  font-size: ${RFValue(17)}px;
  color: ${({ theme }) => theme.colors.attention};
`
