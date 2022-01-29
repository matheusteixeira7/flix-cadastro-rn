import React, { useEffect, useState } from 'react'

import { Container, Client, Name, Date, Icon } from './client-registered-styles'

export interface IDataProps {
  id: string
  name: string
  date: string
  status: string
}

interface ICLientRegisteredProps {
  data: IDataProps
}

export const ClientRegistered = ({ data }: ICLientRegisteredProps) => {
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

  return (
    <Container>
      <Client>
        <Name>{data.name}</Name>
        <Date>{data.date}</Date>
      </Client>

      <Icon name={iconName} status={data.status} />
    </Container>
  )
}
