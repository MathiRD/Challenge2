import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import InitialScreen from "./screens/InitialScreen";
import RestaurantListScreen from "./screens/RestaurantListScreen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RestaurantDetailsScreen from "./screens/RestaurantDetailsScreen";

const Stack = createStackNavigator();
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
            <Stack.Screen name="InitialScreen" component={InitialScreen} />
            <Stack.Screen
              name="restaurantListScreen"
              component={RestaurantListScreen}
            />
            <Stack.Screen
              name="DetailsScreen"
              component={RestaurantDetailsScreen}
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
