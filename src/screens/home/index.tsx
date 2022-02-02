import React, { useState } from 'react'

import { Registered } from '../../components/banner'
import { ClientRegistered } from '../../components/client'
import { EditClientModal } from '../../components/modal-user'
import { Separator } from '../../components/separator'
import { Topbar } from '../../components/topbar'
import {
  ClientRegisteredList,
  Container,
  Modal,
  PageContainer,
  RegisteredUsersTitle,
} from './styles'

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
  const [modalVisible, setModalVisible] = useState(false)
  const [clientName, setClientName] = useState('')

  const handleCloseEditClientModal = (): void => {
    setModalVisible(false)
  }

  const handleOpenEditClientModal = (): void => {
    setModalVisible(true)
  }

  const handleClientName = (client: string): void => {
    setClientName(client)
  }

  return (
    <Container>
      <Modal
        animationType="fade"
        visible={modalVisible}
        transparent={true}
        onRequestClose={handleCloseEditClientModal}
      >
        <EditClientModal
          onPress={handleCloseEditClientModal}
          clientName={clientName}
        />
      </Modal>

      <Topbar />

      <PageContainer>
        <Registered />
        <RegisteredUsersTitle>Usuários Cadastrados</RegisteredUsersTitle>
        <Separator />
        <ClientRegisteredList
          data={client}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ClientRegistered
              data={item}
              openModal={handleOpenEditClientModal}
              setUserName={handleClientName}
            />
          )}
        />
      </PageContainer>
    </Container>
  )
}
