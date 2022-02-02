import { MaterialCommunityIcons } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const InputView = styled.View`
  margin-top: 16px;

  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.border};
`

export const IconView = styled.View`
  border-right-width: 1px;
  border-right-color: ${({ theme }) => theme.colors.border};

  padding: 16px;
`

export const Icon = styled(MaterialCommunityIcons)`
  color: ${({ theme }) => theme.colors.attention};
  font-size: ${RFValue(24)}px;
`

export const TextInput = styled.TextInput`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(15)}px;

  width: 100%;

  margin-left: 16px;
`

export const Error = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.attention};

  margin-top: 06px;
`
