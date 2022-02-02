import React from 'react'

import {
  Container,
  Wrapper,
  FlixSymbol,
  Strong,
  Title,
  VerticalSeparator,
} from './styles'

export const Registered = () => {
  return (
    <Container>
      <Wrapper>
        <FlixSymbol source={require('../../assets/flix-symbol.png')} />
        <VerticalSeparator />
        <Title>
          Parabéns, você já registrou <Strong>14 novos clientes</Strong> este
          mês.
        </Title>
      </Wrapper>
    </Container>
  )
}
