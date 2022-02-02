import {
  Octicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { Platform, View, StyleSheet } from 'react-native'
import { useTheme } from 'styled-components'

import { DateInput } from '../components/birthday-picker'
import { Home } from '../screens/home'
import { Register } from '../screens/register'
import { Resume } from '../screens/resume'

const { Navigator, Screen } = createBottomTabNavigator()

export const AppRoutes = () => {
  const { colors } = useTheme()

  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.title,
        tabBarStyle: {
          paddingVertical: Platform.OS === 'ios' ? 0 : 0,
          height: Platform.OS === 'ios' ? 100 : 72,
        },
        tabBarShowLabel: false,
      }}
    >
      <Screen
        name="Listagem"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home-minus" size={30} color={color} />
          ),
        }}
      />
      <Screen
        name="Cadastrar"
        component={Register}
        options={{
          headerShown: false,
          // tabBarStyle: { display: 'none' },
          tabBarIcon: () => (
            <View style={styles.container}>
              <Octicons name="diff-added" size={24} color={colors.white} />
            </View>
          ),
        }}
      />
      <Screen
        name="Resumo"
        component={DateInput}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="pie-chart" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 56,
    height: 56,
    backgroundColor: '#D33C32',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 5,
  },
})
