import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View``

export const PageContainer = styled.View`
  margin: -40px 24px;
`

export const RegisteredUsersTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semibold};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.title};

  margin: 32px 0 24px;
`
