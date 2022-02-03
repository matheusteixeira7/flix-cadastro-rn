import React, { useState } from 'react'

import { Container, PickerView } from './styles'

export const Picker = () => {
  const [selectedLanguage, setSelectedLanguage] = useState()

  return (
    <Container>
      <PickerView></PickerView>
    </Container>
  )
}
