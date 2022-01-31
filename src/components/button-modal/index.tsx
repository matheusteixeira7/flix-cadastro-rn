import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import { Container, Button, Title } from './styles'

interface IButtonModalProps extends TouchableOpacityProps {
  title: string
}

export const ButtonModal = ({ title, ...rest }: IButtonModalProps) => {
  return (
    <Container title={title}>
      <Button title={title} {...rest}>
        <Title title={title}>{title}</Title>
      </Button>
    </Container>
  )
}
