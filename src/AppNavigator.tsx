import { createStackNavigator } from '@react-navigation/stack';
import InitialScreen from '../src/screens/initialScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='InitialScreen' screenOptions={{ headerShown: false}}>
            <Stack.Screen name='InitialScreen' component={InitialScreen} />
        </Stack.Navigator>
    )
};

export default AppNavigator;