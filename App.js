import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import InitialScreen from './screens/InitialScreen'
import RestaurantListScreen from './screens/RestaurantListScreen'
import DetailsScreen from './screens/DetailsScreen'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="InitialScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="InitialScreen" component={InitialScreen} />
        <Stack.Screen
          name="restaurantListScreen"
          component={RestaurantListScreen}
        />
        <Stack.Screen name="Detalhes" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
