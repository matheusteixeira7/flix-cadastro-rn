import { AntDesign } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

interface IIconsProps {
  status: string
}

export const Container = styled.Pressable`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  margin-bottom: 32px;
`

export const Client = styled.View``

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semibold};
  font-size: ${RFValue(17)}px;
  color: ${({ theme }) => theme.colors.title};
`

export const Date = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(13)}px;
  color: ${({ theme }) => theme.colors.subtitle};
`

export const Icon = styled(AntDesign)<IIconsProps>`
  font-size: ${RFValue(20)}px;
  color: ${({ theme, status }) =>
    status === 'active'
      ? theme.colors.success
      : status === 'cancelled'
      ? theme.colors.attention
      : theme.colors.gray_200};
`
