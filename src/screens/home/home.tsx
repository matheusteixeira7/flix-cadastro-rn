import React from 'react'

import { Registered } from '../../components/registered/registered'
import { Separator } from '../../components/separator/separator'
import { Topbar } from '../../components/topbar/topbar'
import { Container, PageContainer, RegisteredUsersTitle } from './home-styles'

export const Home = () => {
  return (
    <Container>
      <Topbar />

      <PageContainer>
        <Registered />
        <RegisteredUsersTitle>Usuários Cadastrados</RegisteredUsersTitle>
        <Separator />
      </PageContainer>
    </Container>
  )
}
