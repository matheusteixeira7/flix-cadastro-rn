import DateTimePicker from '@react-native-community/datetimepicker'
import React from 'react'
import { View, StyleSheet } from 'react-native'

interface IProps {
  showDatepicker: () => void
  showTimepicker: () => void
  date: Date
  onChange: (event: any, selectedDate: Date) => void
  mode: string
  show: boolean
}

export const DateInput = ({ date, onChange, mode, show }: IProps) => {
  return (
    <View style={styles.container}>
      <View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '100%',
  },
})
