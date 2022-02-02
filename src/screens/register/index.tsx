import { yupResolver } from '@hookform/resolvers/yup'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { View, Button, Platform, Pressable } from 'react-native'
import * as yup from 'yup'

import { DateInput } from '../../components/birthday-picker'
import { Input } from '../../components/form/input'
import { Container, Title } from './styles'

const schema = yup.object({
  name: yup
    .string()
    .required('Nome é obrigatório')
    .min(3, 'O nome deve ter no mínimo 3 caracteres'),
  cpf: yup
    .string()
    .matches(/^[0-9]+$/, 'CPF deve conter apenas números')
    .min(11, 'CPF precisa ter exatamente 11 dígitos')
    .max(11, 'CPF precisa ter exatamente 11 dígitos')
    .required('CPF é obrigatório'),
  rg: yup
    .string()
    .matches(/^[0-9]+$/, 'RG deve conter apenas números')
    .min(9, 'RG precisa ter exatamente 9 dígitos')
    .max(9, 'RG precisa ter exatamente 9 dígitos')
    .required('RG é obrigatório'),
  datepicker: yup.string(),
})

export const Register = () => {
  const [myData, setMyData] = useState([])
  const [date, setDate] = useState(null)
  const [mode, setMode] = useState('date')
  const [show, setShow] = useState(false)

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date
    setShow(Platform.OS === 'ios')
    setDate(currentDate)
  }

  const showMode = (currentMode) => {
    setShow(true)
    setMode(currentMode)
  }

  const showDatepicker = () => {
    showMode('date')
    setDate(new Date())
  }

  const showTimepicker = () => {
    showMode('time')
  }

  const formattedDate = date ? Intl.DateTimeFormat('pt-BR').format(date) : ''

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const handleOnSubmit = (data) => {
    const peu = Object.assign(data, { datepicker: formattedDate })
    setMyData(peu)
  }

  return (
    <Container>
      <Title>Preencha os dados{'\n'} do cliente</Title>

      <View>
        <Controller
          name="name"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Nome completo"
              icon="badge-account-horizontal-outline"
              error={errors.name?.message}
            />
          )}
        />
        <Controller
          name="cpf"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="CPF"
              icon="card-bulleted-outline"
              error={errors.cpf?.message}
              keyboardType="numeric"
            />
          )}
        />
        <Controller
          name="rg"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="RG"
              icon="card-account-details-outline"
              error={errors.rg?.message}
              keyboardType="numeric"
            />
          )}
        />
        <Pressable onPress={showDatepicker}>
          <View pointerEvents="none">
            <Controller
              name="datepicker"
              control={control}
              render={({ field: { onChange, onBlur } }) => (
                <Input
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={formattedDate}
                  placeholder="Data de nascimento"
                  icon="calendar"
                  error={errors.datepicker?.message}
                  editable={false}
                />
              )}
            />
          </View>
        </Pressable>

        <DateInput
          showDatepicker={showDatepicker}
          showTimepicker={showTimepicker}
          date={date}
          mode={mode}
          show={show}
          onChange={onChange}
        />

        <View style={{ marginTop: 80 }}>
          <Button title="Submit" onPress={handleSubmit(handleOnSubmit)} />
          <Button title="Clg" onPress={() => console.log(myData)} />
        </View>
      </View>
    </Container>
  )
}
