import React from 'react';
import { NativeRouter, Route, Link } from 'react-router-native';

import HomeScreen from './screens/HomeScreen';
import TicketListScreen from './screens/TicketListScreen';
import SubmitTicketScreen from './screens/SubmitTicketScreen';

const Navigation = () => {
  return (
    <NativeRouter>
      <Link to="/">Home</Link>
      <Link to="/submit-ticket">Submit Ticket</Link>
      <Link to="/ticket-list">Ticket List</Link>

      <Route exact path="/" component={HomeScreen} />
      <Route path="/submit-ticket" component={SubmitTicketScreen} />
      <Route path="/ticket-list" component={TicketListScreen} />
    </NativeRouter>
  );
};

export default Navigation;
