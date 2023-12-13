import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBrowserApp } from '@react-navigation/web';

import TicketListScreen from './TicketListScreen'; // Create or import your TicketListScreen component
import SubmitTicketForm from './SubmitTicketForm'; // Your SubmitTicketForm component

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const TicketListStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="TicketList" component={TicketListScreen} options={{ title: 'Ticket List' }} />
  </Stack.Navigator>
);

const SubmitTicketStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="SubmitTicket" component={SubmitTicketForm} options={{ title: 'Submit Ticket' }} />
  </Stack.Navigator>
);

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="TicketList">
        <Drawer.Screen name="TicketList" component={TicketListStack} />
        <Drawer.Screen name="SubmitTicket" component={SubmitTicketStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default createBrowserApp(AppNavigation);
