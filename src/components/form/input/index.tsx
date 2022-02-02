import React from 'react'
import { TextInputProps } from 'react-native'

import { InputView, IconView, Icon, TextInput, Error } from './styles'

interface IProps extends TextInputProps {
  icon: string
  error: string
}

export const Input = ({
  onBlur,
  onChangeText,
  value,
  placeholder,
  icon,
  error,
  keyboardType,
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
        />
      </InputView>
      {error != null && <Error>{error}</Error>}
    </>
  )
}
