import React from 'react'

import { Registered } from '../../components/registered/registered'
import { Topbar } from '../../components/topbar/topbar'
import { Container, PageContainer } from './home-styles'

export const Home = () => {
  return (
    <Container>
      <Topbar />
      <PageContainer>
        <Registered />
      </PageContainer>
    </Container>
  )
}
