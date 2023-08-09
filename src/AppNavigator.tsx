import { createStackNavigator } from '@react-navigation/stack';
import InitialScreen from '../src/screens/initialScreen';
import RestaurantListScreen from './screens/restaurantListScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='InitialScreen' screenOptions={{ headerShown: false}}>
            <Stack.Screen name='InitialScreen' component={InitialScreen} />
            <Stack.Screen name='restaurantListScreen' component={RestaurantListScreen} />
        </Stack.Navigator>
    )
};

export default AppNavigator;