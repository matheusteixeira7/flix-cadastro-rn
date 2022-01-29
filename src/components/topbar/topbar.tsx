import React from 'react'

import {
  Container,
  ContentWrapper,
  UserWrapper,
  Icon,
  User,
  UserName,
  Greeting,
  UserPicture,
} from './topbar-styles'

export const Topbar = () => {
  return (
    <Container>
      <ContentWrapper>
        <UserWrapper>
          <UserPicture
            source={{
              uri: 'https://bit.ly/34300KL',
            }}
          />
          <User>
            <Greeting>Olá,</Greeting>
            <UserName>Matheus</UserName>
          </User>
        </UserWrapper>

        <Icon name="power" />
      </ContentWrapper>
    </Container>
  )
}
