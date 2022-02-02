import { FlatList, Modal as ModalContainer } from 'react-native'
import { getBottomSpace } from 'react-native-iphone-x-helper'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

import { IDataProps } from '../../components/client'

export const Container = styled.View`
  flex: 1;
`

export const PageContainer = styled.View`
  flex: 1;
  margin: -40px 24px;
  margin-bottom: ${getBottomSpace()}px;
`

export const RegisteredUsersTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semibold};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.title};

  margin: 32px 0 24px;
`

export const ClientRegisteredList = styled(
  FlatList as new () => FlatList<IDataProps>
).attrs({
  showsVerticalScrollIndicator: false,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
})<any>`
  flex: 1;
  margin-top: 32px;
`

export const Modal = styled(ModalContainer).attrs({})``
