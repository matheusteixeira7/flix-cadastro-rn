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
} from './styles'

export const Topbar = () => {
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

        <Icon name="power" />
      </ContentWrapper>
    </Container>
  )
}
