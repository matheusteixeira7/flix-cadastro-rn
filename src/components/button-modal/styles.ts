import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

interface IProps extends RectButtonProps {
  title: string
}

export const Container = styled.View<IProps>`
  width: 48%;
  border: ${({ theme, title }) =>
    title === 'Não' ? `1px solid ${theme.colors.gray_200}` : 'none'};
  border-radius: 5px;

  margin-top: 24px;
`

export const Button = styled(RectButton)<IProps>`
  padding: 18px;
  background-color: ${({ theme, title }) =>
    title === 'Sim' ? theme.colors.primary : theme.colors.transparent};

  justify-content: center;
  border-radius: 5px;
  align-items: center;
`

export const Title = styled.Text<IProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(15)}px;
  color: ${({ theme, title }) =>
    title === 'Sim' ? theme.colors.white : theme.colors.title};
`
