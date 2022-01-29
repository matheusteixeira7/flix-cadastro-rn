import React from 'react'

import { ClientRegistered } from '../../components/client-registered/client-registered'
import { Registered } from '../../components/registered/registered'
import { Separator } from '../../components/separator/separator'
import { Topbar } from '../../components/topbar/topbar'
import {
  ClientRegisteredList,
  Container,
  PageContainer,
  RegisteredUsersTitle,
} from './home-styles'

const client = [
  {
    id: '1',
    name: 'Márcio Pensabem',
    date: 'Cadastrado em 16/03/21',
    status: 'active',
  },
  {
    id: '2',
    name: 'Ismael Ribeiro',
    date: 'Cadastrado em 16/03/21',
    status: 'cancelled',
  },
  {
    id: '3',
    name: 'Roberto da Silva',
    date: 'Cadastrado em 16/03/21',
    status: 'pending',
  },
  {
    id: '4',
    name: 'Matheus Teixeira',
    date: 'Cadastrado em 16/03/21',
    status: 'active',
  },
  {
    id: '5',
    name: 'Lojas Renner',
    date: 'Cadastrado em 16/03/21',
    status: 'active',
  },
  {
    id: '6',
    name: 'William Miranda',
    date: 'Cadastrado em 16/03/21',
    status: 'active',
  },
  {
    id: '7',
    name: 'Rodrigo Otávio',
    date: 'Cadastrado em 16/03/21',
    status: 'active',
  },
  {
    id: '8',
    name: 'Cristiane Almeida',
    date: 'Cadastrado em 16/03/21',
    status: 'cancelled',
  },
  {
    id: '9',
    name: 'Luís da Costa',
    date: 'Cadastrado em 16/03/21',
    status: 'pending',
  },
]

export const Home = () => {
  return (
    <Container>
      <Topbar />

      <PageContainer>
        <Registered />
        <RegisteredUsersTitle>Usuários Cadastrados</RegisteredUsersTitle>
        <Separator />
        <ClientRegisteredList
          data={client}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ClientRegistered data={item} />}
        />
      </PageContainer>
    </Container>
  )
}
