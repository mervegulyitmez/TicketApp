import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button
} from "react-native";
import { useTicketContext } from "./../context/TicketContext";
import alert from './../component/alert';
import { TouchableOpacity } from "react-native-web";


const SubmitTicketScreen = () => {
  const { updateTicket } = useTicketContext();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    photo: '',
    description: '',
    status: 'new',
  });

  const [selectedImage, setSelectedImage] = useState(null);

  const [error, setError] = useState(null);

  const handleInputChange = (fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleSubmit = async () => {
    // Simple validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.description.trim()) {
      alert("Validation Error", "Name, Email, and Description are required fields.");
      return;
    }

    try {
      // Call the updateTicket function from the context
      await updateTicket({
        ...formData,
        photo: selectedImage || "", // Add the selected image URI to the ticket data
      });

      // Clear the form after submitting
      setFormData({
        name: "",
        email: "",
        description: "",
        // Clear other fields as needed
      });

      // Clear selected image
      setSelectedImage(null);

      // Provide feedback to the user
      setTimeout(() => {
        alert("Success", "Ticket submitted successfully!");
      }, 200);
    } catch (error) {
      console.error("Error submitting ticket:", error);
      setTimeout(() => {
        alert("Error", "Failed to submit ticket. Please try again.");
      }, 200);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.description}>
        Please provide details about the problem you are experiencing. We will do our best to assist you.
      </Text>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        value={formData.name}
        onChangeText={(text) => handleInputChange("name", text)}
        placeholder="Enter your name"
      />

      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={formData.email}
        onChangeText={(text) => handleInputChange("email", text)}
        placeholder="Enter your email"
        keyboardType="email-address"
      />

      <Text style={styles.label}>Description:</Text>
      <TextInput
        style={[styles.input, styles.multilineInput]}
        value={formData.description}
        onChangeText={(text) => handleInputChange("description", text)}
        placeholder="Describe the problem you are experiencing"
        multiline
      />

      
      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Submit Ticket</Text>
      </TouchableOpacity>
    </View>
  );
};


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
  description: {
    fontSize: 16,
    marginBottom: 16,
    color: "#555",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  multilineInput: {
    height: 80,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#00531b",
    borderRadius: 4,
    padding: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
});

export default SubmitTicketScreen;
