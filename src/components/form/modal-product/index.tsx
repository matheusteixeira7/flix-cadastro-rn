import React from 'react'

import { SeparatorHorizontal } from '../../separator-horizontal'
import {
  Container,
  Header,
  Footer,
  ProductView,
  ModalView,
  Title,
  Icon,
  Name,
  Description,
  ProductTitle,
  PaddingVertical,
} from './styles'

export const ModalProduct = () => {
  return (
    <Container>
      <ModalView>
        <Header>
          <Title>Escolha o produto:</Title>
        </Header>
        <SeparatorHorizontal />

        <Footer>
          <ProductView onPress={() => console.log('ok')}>
            <Icon name="wifi" />
            <ProductTitle>
              <Name>Flix Internet</Name>
              <Icon name="keyboard-arrow-right" />
            </ProductTitle>
            <Description>Internet residencial e predial.</Description>
          </ProductView>

          <PaddingVertical>
            <SeparatorHorizontal />
          </PaddingVertical>

          <ProductView>
            <Icon name="live-tv" />
            <ProductTitle>
              <Name>Flix TV</Name>
              <Icon name="keyboard-arrow-right" />
            </ProductTitle>
            <Description>
              Mais de 100 canais com filmes, séries, entretenimento e muito
              mais!
            </Description>
          </ProductView>

          <PaddingVertical>
            <SeparatorHorizontal />
          </PaddingVertical>

          <ProductView>
            <Icon name="phone-android" />
            <ProductTitle>
              <Name>Flix Móvel</Name>
              <Icon name="keyboard-arrow-right" />
            </ProductTitle>
            <Description>
              Fale ilimitado e tenha muito mais internet com a maior cobertura
              do Brasil!
            </Description>
          </ProductView>

          <PaddingVertical>
            <SeparatorHorizontal />
          </PaddingVertical>
        </Footer>
      </ModalView>
    </Container>
  )
}
