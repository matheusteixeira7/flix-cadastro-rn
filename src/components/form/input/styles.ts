import { MaterialCommunityIcons } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  margin-bottom: 16px;
`

export const InputView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  padding: 16px;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 10px;
`

export const Icon = styled(MaterialCommunityIcons)`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${RFValue(24)}px;
`

export const TextInput = styled.TextInput`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(15)}px;

  margin-left: 16px;
  width: 100%;
`

export const Error = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.attention};

  margin-top: 6px;
`
