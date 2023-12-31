import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import InitialScreen from './screens/InitialScreen';
import RestaurantListScreen from './screens/RestaurantListScreen';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import RestaurantDetailsScreen from './screens/RestaurantDetailsScreen';
import { GlobalStyles } from './constants/style';
import Ionicons from '@expo/vector-icons/Ionicons';
import { RootStackParamList } from './types/types';

const Stack = createStackNavigator<RootStackParamList>();
const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="InitialScreen"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="InitialScreen"
              component={InitialScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="restaurantListScreen"
              component={RestaurantListScreen}
              options={{
                headerShown: true,
                title: 'Restaurants',
                headerTintColor: GlobalStyles.colors.primary0,
                headerTitleAlign: 'center',
                headerTitleStyle: {
                  fontFamily: 'Poppins-Bold',
                  fontSize: 18,
                },
                headerStyle: {
                  backgroundColor: GlobalStyles.colors.primary600,
                  height: 90,
                  elevation: 0,
                  shadowOpacity: 0,
                  shadowColor: 'transparent',
                  shadowOffset: { width: 0, height: 10 },
                  shadowRadius: 0,
                },
                headerLeft: null,
              }}
            />
            <Stack.Screen
              name="DetailsScreen"
              component={RestaurantDetailsScreen}
              options={{
                headerShown: true,
                headerTransparent: true,
                title: '',
                headerTintColor: 'white',
                // headerLeft: () => {
                //   <Ionicons
                //     name="chevron-back-outline"
                //     size={24}
                //     color="white"
                //   />;
                // },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
