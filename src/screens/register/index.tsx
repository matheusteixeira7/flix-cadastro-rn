import { yupResolver } from '@hookform/resolvers/yup'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { View, Platform, Pressable } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import * as yup from 'yup'

import { DateInput } from '../../components/form/birthday-picker'
import { Input } from '../../components/form/input'
import { SubmitButton } from '../../components/form/submit-button'
import { Container, Footer, Title } from './styles'

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
  datepicker: yup.string().nullable(),
  cellphone_1: yup
    .string()
    .min(11, 'Telefone precisa ter ddd + número')
    .max(11, 'Telefone precisa ter ddd + número')
    .required('Telefone é obrigatório'),
  cellphone_2: yup
    .string()
    .min(11, 'Telefone precisa ter ddd + número')
    .max(11, 'Telefone precisa ter ddd + número'),
  whatsapp: yup
    .string()
    .matches(/^[0-9]+$/, 'Whatsapp deve conter apenas números')
    .min(11, 'Whatsapp precisa ter ddd + número')
    .max(11, 'Whatsapp precisa ser ddd + número')
    .required('Whatsapp é obrigatório'),
  email: yup
    .string()
    .email('Por favor, insira um email válido')
    .required('E-mail é obrigatório'),
  cep: yup
    .string()
    .matches(/^[0-9]+$/, 'CEP deve conter apenas números')
    .min(8, 'CEP precisa ter exatamente 8 dígitos')
    .max(8, 'CEP precisa ter exatamente 8 dígitos')
    .required('CEP é obrigatório'),
  streetAddress: yup.string().required('Endereço é obrigatório'),
  addressNumber: yup.string().required('Número é obrigatório'),
  neighborhood: yup.string().required('Bairro é obrigatório'),
  city: yup.string().required('Cidade é obrigatório'),
  state: yup.string().required('Estado é obrigatório'),
  reference: yup.string().required('Pontos de referência é obrigatório'),
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

  const showMode = (currentMode: React.SetStateAction<string>) => {
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
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const checkCEP = (arg: { toString: () => string }) => {
    const regex = /\D/g
    const cep = arg.toString().replace(regex, '')

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setValue('streetAddress', data.logradouro)
        setValue('neighborhood', data.bairro)
        setValue('city', data.localidade)
        setValue('state', data.uf)
      })
      .catch((err) => console.log(err))
  }

  const handleOnSubmit = (data) => {
    const peu = Object.assign(data, { datepicker: formattedDate })
    setMyData(peu)
  }

  return (
    <Container>
      <Title>Preencha os dados{'\n'} do cliente</Title>

      <ScrollView>
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
              autoCapitalize="words"
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

        <Controller
          name="cellphone_1"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Telefone 1*"
              icon="cellphone-android"
              error={errors.cellphone_1?.message}
              keyboardType="numeric"
            />
          )}
        />

        <Controller
          name="cellphone_2"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Telefone 2"
              icon="phone"
              error={errors.cellphone_2?.message}
              keyboardType="numeric"
            />
          )}
        />

        <Controller
          name="whatsapp"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Whatsapp*"
              icon="whatsapp"
              error={errors.whatsapp?.message}
              keyboardType="numeric"
            />
          )}
        />

        <Controller
          name="email"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Email*"
              icon="email"
              error={errors.email?.message}
              keyboardType="email-address"
            />
          )}
        />

        <Controller
          name="cep"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              onBlur={() => checkCEP(value)}
              onChangeText={onChange}
              value={value}
              placeholder="CEP*"
              icon="home-city-outline"
              error={errors.cep?.message}
              keyboardType="numeric"
            />
          )}
        />

        <Controller
          name="streetAddress"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Rua*"
              icon="home-city-outline"
              error={errors.streetAddress?.message}
              {...register('streetAddress')}
              ref={null}
            />
          )}
        />

        <Controller
          name="addressNumber"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Número residencial*"
              icon="home-city-outline"
              error={errors.addressNumber?.message}
              {...register('addressNumber')}
              ref={null}
              keyboardType="numeric"
            />
          )}
        />

        <Controller
          name="neighborhood"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Bairro*"
              icon="home-city-outline"
              error={errors.neighborhood?.message}
              {...register('neighborhood')}
              ref={null}
            />
          )}
        />

        <Controller
          name="city"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Cidade*"
              icon="home-city-outline"
              error={errors.city?.message}
              {...register('city')}
              ref={null}
            />
          )}
        />

        <Controller
          name="state"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Estado*"
              icon="home-city-outline"
              error={errors.state?.message}
              {...register('state')}
              ref={null}
            />
          )}
        />

        <Controller
          name="reference"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Ponto de referência*"
              icon="home-city-outline"
              error={errors.reference?.message}
            />
          )}
        />

        <Footer>
          <SubmitButton onPress={() => console.log(myData)} title="Cancelar" />
          <SubmitButton
            onPress={handleSubmit(handleOnSubmit)}
            title="Cadastrar"
          />
        </Footer>
      </ScrollView>
    </Container>
  )
}

// Por favor, informe o endereço para entrega
// Informação inválida. Por favor, tente novamente.
