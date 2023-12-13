import React from 'react';
import { View, Text, StyleSheet, Button, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-web';

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
        {/* <Button title="Submit Ticket" onPress={goToSubmitTicket} style={styles.button}/> */}
        <TouchableOpacity onPress={goToSubmitTicket} style={styles.button}>
          <Text style={styles.sendButtonText}>Submit Ticket</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToTicketList} style={styles.button}>
          <Text style={styles.sendButtonText}>Ticket List</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#FEFBEA",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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
  button:{
    backgroundColor: '#00531b',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  sendButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});


export default HomeScreen;
