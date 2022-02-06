import React from 'react'
import { TextInputProps } from 'react-native'

import { Icon, TextInput, Error, Container, InputView } from './styles'

interface IProps extends TextInputProps {
  icon: string
  error: string
  ref?: null
}

export const Input = ({
  onBlur,
  onChangeText,
  value,
  placeholder,
  icon,
  error,
  keyboardType,
  autoCapitalize,
}: IProps) => {
  return (
    <Container>
      <InputView>
        <Icon name={icon} />
        <TextInput
          onBlur={onBlur}
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={value}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
        />
      </InputView>
      {error != null && <Error>{error}</Error>}
    </Container>
  )
}
