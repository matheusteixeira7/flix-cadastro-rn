import { MaterialIcons } from '@expo/vector-icons'
import { getBottomSpace } from 'react-native-iphone-x-helper'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.modal_transparent};
  margin-top: ${getBottomSpace() + 24}px;
`

export const ModalView = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
  flex: 1;
  width: 100%;
`

export const Header = styled.View`
  padding: 16px;
`

export const Footer = styled.View`
  padding: 16px;
`

export const ProductView = styled.TouchableOpacity``

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.title};
`

export const ProductTitle = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Icon = styled(MaterialIcons)`
  font-size: ${RFValue(24)}px;
`

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.title};
  padding: 16px 0;
`

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.subtitle};
  max-width: 80%;
`

export const PaddingVertical = styled.View`
  padding: 16px 0;
`
