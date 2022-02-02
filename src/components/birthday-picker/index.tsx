import DateTimePicker from '@react-native-community/datetimepicker'
import React from 'react'
import { View, Button, StyleSheet } from 'react-native'

interface IProps {
  showDatepicker: () => void
  showTimepicker: () => void
  date: Date
  onChange: (event: any, selectedDate: Date) => void
  mode: string
  show: boolean
}

export const DateInput = ({
  showDatepicker,
  showTimepicker,
  date,
  onChange,
  mode,
  show,
}: IProps) => {
  return (
    <View style={styles.container}>
      <View>
        <View>
          <Button onPress={showDatepicker} title="Show date picker!" />
        </View>
        <View>
          <Button onPress={showTimepicker} title="Show time picker!" />
        </View>
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
