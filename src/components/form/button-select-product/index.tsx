import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { useState } from 'react'

import { Container, Icon, Title } from './styled'

type IStackProps = StackNavigationProp<StackParamList>

export type StackParamList = {
  SelectProduct: undefined
  // About: { bar: string; onBaz: () => void }
}

export const ButtonSelectProduct = () => {
  const [title, setTitle] = useState('Selecione um produto')
  const navigation = useNavigation<IStackProps>()

  return (
    <Container onPress={() => navigation.navigate('SelectProduct')}>
      <Icon name="select1" />
      <Title title={title}>{title}</Title>
    </Container>
  )
}
