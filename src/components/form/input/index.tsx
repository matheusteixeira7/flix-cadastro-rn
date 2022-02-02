import React from 'react'

import { InputView, IconView, Icon, TextInput, Error } from './styles'

interface IProps {
  onBlur: () => void
  onChangeText: (value: string) => void
  value: string
  placeholder: string
  icon: string
  error: string
  editable?: boolean
  selectTextOnFocus?: boolean
  contextMenuHidden?: boolean
}

export const Input = ({
  onBlur,
  onChangeText,
  value,
  placeholder,
  icon,
  error,
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
        />
      </InputView>
      {error != null && <Error>{error}</Error>}
    </>
  )
}
