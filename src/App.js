import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import TicketListScreen from "./screens/TicketListScreen";
import SubmitTicketScreen from "./screens/SubmitTicketScreen";
import TicketDetailsScreen from "./screens/TicketDetailsScreen";
import { TicketProvider } from "./context/TicketContext";

const Stack = createStackNavigator();

const App = () => {
  return (
    <TicketProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: "#FEFBEA",
            },
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="TicketList"
            component={TicketListScreen}
            options={{ headerTitle: "Ticket List" }}
          />
          <Stack.Screen
            name="SubmitTicket"
            component={SubmitTicketScreen}
            options={{ headerTitle: "Submit Ticket" }}
          />
          <Stack.Screen
            name="TicketDetailsScreen"
            component={TicketDetailsScreen}
            options={{ headerTitle: 'Ticket Details' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </TicketProvider>
  );
};

export default App;
