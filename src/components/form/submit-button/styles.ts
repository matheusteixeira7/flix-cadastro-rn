import { BorderlessButton } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled(BorderlessButton)``

interface ITitleProps {
  title: string
}

export const Title = styled.Text<ITitleProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(15)}px;
  color: ${({ theme, title }) =>
    title === 'Cadastrar' ? theme.colors.primary : theme.colors.title};
`
