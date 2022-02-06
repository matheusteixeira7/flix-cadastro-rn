import 'intl'
import 'intl/locale-data/jsonp/pt-BR'

/* eslint-disable import/no-duplicates */
import 'react-native-gesture-handler'

import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts,
} from '@expo-google-fonts/poppins'
import { NavigationContainer } from '@react-navigation/native'
import AppLoading from 'expo-app-loading'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { ThemeProvider } from 'styled-components/native'

import { StackRoutes } from './src/routes/stack.routes'
import theme from './src/styles/theme'

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <ThemeProvider theme={theme}>
        <GestureHandlerRootView style={styles.gestureHandler}>
          <StackRoutes />
        </GestureHandlerRootView>
      </ThemeProvider>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  gestureHandler: {
    flex: 1,
  },
})
