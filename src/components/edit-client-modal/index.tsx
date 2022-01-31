import React from 'react'

import { ButtonModal } from '../button-modal'
import { SeparatorHorizontal } from '../separator-horizontal'
import { SeparatorShort } from '../separator-short'
import {
  Container,
  Background,
  ClientName,
  ModalView,
  Title,
  ButtonsWrapper,
  ModalWrapper,
  DeleteRegister,
  Icon,
  DeleteText,
} from './styles'

interface IEditClientModalProps {
  onPress: () => void
  clientName: string
}

export const EditClientModal = ({
  onPress,
  clientName,
}: IEditClientModalProps) => {
  return (
    <Container>
      <Background onPress={onPress} />
      <ModalView>
        <ModalWrapper>
          <SeparatorShort />
          <Title>
            Editar registro de <ClientName>{clientName}</ClientName>?
          </Title>
          <ButtonsWrapper>
            <ButtonModal title="Não" />
            <ButtonModal title="Sim" />
          </ButtonsWrapper>
        </ModalWrapper>
        <SeparatorHorizontal />
        <DeleteRegister>
          <Icon name="trash-2" />
          <DeleteText>Deletar registro</DeleteText>
        </DeleteRegister>
      </ModalView>
    </Container>
  )
}
