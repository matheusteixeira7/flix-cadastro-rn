import { AntDesign } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

interface ITitleProps {
  title: string
}

export const Container = styled.Pressable`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 16px;
  margin-bottom: 16px;

  border-radius: 10px;
`

export const Icon = styled(AntDesign)`
  font-size: ${RFValue(24)}px;
`

export const Title = styled.Text<ITitleProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme, title }) =>
    title === 'Selecione um produto'
      ? theme.colors.placeholder
      : theme.colors.title};
  font-size: ${RFValue(16)}px;
  margin-left: 16px;
`
