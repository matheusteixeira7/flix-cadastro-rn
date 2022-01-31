import React, { useEffect, useState } from 'react'

import { Container, Client, Name, Date, Icon } from './styles'

export interface IDataProps {
  id: string
  name: string
  date: string
  status: string
}

interface ICLientRegisteredProps {
  data: IDataProps
  openModal: () => void
  setUserName: (client: string) => void
}

export const ClientRegistered = ({
  data,
  openModal,
  setUserName,
}: ICLientRegisteredProps) => {
  const [iconName, setIconName] = useState('clockcircle')

  useEffect(() => {
    setIconName(
      data.status === 'active'
        ? 'checkcircle'
        : data.status === 'cancelled'
        ? 'closecircle'
        : 'clockcircle'
    )
  }, [data.status])

  const handleOpenModal = () => {
    setUserName(data.name)
    openModal()
  }

  return (
    <Container onPress={handleOpenModal}>
      <Client>
        <Name>{data.name}</Name>
        <Date>{data.date}</Date>
      </Client>

      <Icon name={iconName} status={data.status} />
    </Container>
  )
}
