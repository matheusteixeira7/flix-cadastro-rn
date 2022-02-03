import React from 'react'
import { TextInputProps } from 'react-native'

import { InputView, IconView, Icon, TextInput, Error } from './styles'

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
    <>
      <InputView>
        <IconView>
          <Icon name={icon} />
        </IconView>
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
    </>
  )
}
