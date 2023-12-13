
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import TicketListScreen from './screens/TicketListScreen';
import SubmitTicketScreen from './screens/SubmitTicketScreen';
import TicketDetailsScreen from './screens/TicketDetailsScreen';
import {TicketProvider} from './context/TicketContext';
const Stack = createStackNavigator();

const App = () => {
  return (
    <TicketProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="TicketList" component={TicketListScreen} />
          <Stack.Screen name="SubmitTicket" component={SubmitTicketScreen} />
          <Stack.Screen name="TicketDetailsScreen" component={TicketDetailsScreen} /> 
        </Stack.Navigator>
      </NavigationContainer>
    </TicketProvider>
  );
};

export default App;
