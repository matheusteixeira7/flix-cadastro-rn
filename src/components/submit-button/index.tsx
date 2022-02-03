import React from 'react'
import { BorderlessButtonProps } from 'react-native-gesture-handler'

import { Container, Title } from './styles'

interface IProps extends BorderlessButtonProps {
  title: string
  onPress: () => void
}

export const SubmitButton = ({ title, ...rest }: IProps) => {
  return (
    <Container {...rest}>
      <Title title={title}>{title}</Title>
    </Container>
  )
}
