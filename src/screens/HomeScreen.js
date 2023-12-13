import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const goToSubmitTicket = () => {
    navigation.navigate('SubmitTicket');
  };

  const goToTicketList = () => {
    navigation.navigate('TicketList');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My App</Text>
      <Text style={styles.description}>Explore the app and submit your support tickets.</Text>

      <View style={styles.buttonContainer}>
        <Button title="Submit Ticket" onPress={goToSubmitTicket} />
        <Button title="Ticket List" onPress={goToTicketList} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default HomeScreen;
