import { useNavigation } from '@react-navigation/native'
import React from 'react'

import { Container, Icon, ReturnView } from './styles'

export const SelectProduct = () => {
  const navigation = useNavigation()

  return (
    <Container>
      <ReturnView onPress={() => navigation.goBack()}>
        <Icon name="ios-chevron-back-outline" />
      </ReturnView>
    </Container>
  )
}
