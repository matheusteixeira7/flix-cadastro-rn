import React, { useState } from 'react'

import { Container, Icon, Title } from './styled'

export const ButtonSelectProduct = () => {
  const [title, setTitle] = useState('Selecione um produto')

  return (
    <Container>
      <Icon name="select1" />
      <Title title={title}>{title}</Title>
    </Container>
  )
}
