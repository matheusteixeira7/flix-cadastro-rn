import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import { Pressable } from 'react-native'

import {
  Container,
  ContentWrapper,
  UserWrapper,
  Icon,
  User,
  UserName,
  Greeting,
  UserPicture,
} from './styles'

type IStackProps = StackNavigationProp<StackParamList>

export type StackParamList = {
  Registro: undefined
  // About: { bar: string; onBaz: () => void }
}

export const Topbar = () => {
  const navigation = useNavigation<IStackProps>()

  const handleGoToRegisterScreen = () => {
    navigation.navigate('Registro')
  }

  return (
    <Container>
      <ContentWrapper>
        <UserWrapper>
          <UserPicture
            source={{
              uri: 'https://avatars.githubusercontent.com/u/62615871?v=4',
            }}
          />
          <User>
            <Greeting>Olá,</Greeting>
            <UserName>Matheus</UserName>
          </User>
        </UserWrapper>

        <Pressable onPress={handleGoToRegisterScreen}>
          <Icon name="power" />
        </Pressable>
      </ContentWrapper>
    </Container>
  )
}
