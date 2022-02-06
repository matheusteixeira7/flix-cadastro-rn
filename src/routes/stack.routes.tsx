import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
// import { useTheme } from 'styled-components/native'

import { Home } from '../screens/home'
import { Register } from '../screens/register'
import { SelectProduct } from '../screens/select-product'

const { Navigator, Screen } = createStackNavigator()

export function StackRoutes() {
  // const { colors } = useTheme()

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Register" component={Register} />
      <Screen name="SelectProduct" component={SelectProduct} />
    </Navigator>
  )
}
