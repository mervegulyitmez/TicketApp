import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Modal,
  Button,
  TouchableWithoutFeedback,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { useTicketContext } from "../context/TicketContext";
const TicketDetailsScreen = () => {
  const route = useRoute();
  const { ticketId } = route.params;

  const { tickets, updateTicket } = useTicketContext();
  const selectedTicket = tickets.find((ticket) => ticket.id === ticketId);

  const statusOptions = ["New", "In Progress", "Resolved"];

  const [newStatus, setNewStatus] = useState(selectedTicket?.status || "New");
  const [additionalDetails, setAdditionalDetails] = useState(
    selectedTicket?.additionalDetails || ""
  );
  const [isModalVisible, setModalVisible] = useState(false);

  // Function to toggle the status filter modal visibility
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  // Function to handle updating the status and additional details

  const handleSelectStatus = (status) => {
    setNewStatus(status);
    handleUpdateStatus(); // Update the status immediately
  };

  // Function to handle updating the status and additional details
  const handleUpdateStatus = () => {
    const updatedTicket = {
      ...selectedTicket,
      status: newStatus,
      additionalDetails,
    };
    updateTicket(updatedTicket);

    // Simulate sending an email by logging the email content
    const emailContent = `Would normally send email here with body: ${JSON.stringify(
      updatedTicket
    )}`;
    console.log(emailContent);
  };

  // Use effect to handle automatic status update on changes
  useEffect(() => {
    handleUpdateStatus();
  }, [newStatus, additionalDetails]);

  // Use effect to handle automatic status update on changes
  useEffect(() => {
    handleUpdateStatus();
  }, [newStatus, additionalDetails]);

  const handleSend = () => {
    const updatedTicket = {
      ...selectedTicket,
      status: newStatus,
      additionalDetails,
    };
    updateTicket(updatedTicket);

    // Simulate sending an email by logging the email content
    const emailContent = `Would normally send email here with body: ${JSON.stringify(
      updatedTicket
    )}`;
    console.log(emailContent);
  };

  return (
    <View style={styles.container}>
      {/* Ticket Details Section */}
      <View style={styles.detailsContainer}>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Ticket ID:</Text>
          <Text style={styles.detailText}>{ticketId}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Status:</Text>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text style={styles.statusText}>{newStatus}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Name:</Text>
          <Text style={styles.detailText}>{selectedTicket?.name}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Email:</Text>
          <Text style={styles.detailText}>{selectedTicket?.email}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Description:</Text>
          <Text style={styles.detailText}>{selectedTicket?.description}</Text>
        </View>

        {["In Progress", "Resolved"].includes(newStatus) && (
          <View>
            <Text style={styles.detailLabel}>Response:</Text>
            <TextInput
              style={styles.textInput}
              value={additionalDetails}
              onChangeText={(text) => setAdditionalDetails(text)}
              multiline
            />
            <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
              <Text style={styles.sendButtonText}>Send</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* Status Filter Modal */}
      <Modal visible={isModalVisible} transparent={true} animationType="slide">
        <TouchableWithoutFeedback onPress={toggleModal}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              {statusOptions.map((status) => (
                <TouchableOpacity
                  key={status}
                  style={styles.statusItem}
                  onPress={() => handleSelectStatus(status)} // Call the new function
                >
                  <Text>{status}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
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
  detailsContainer: {
    marginBottom: 20,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  detailLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginRight: 8,
  },
  detailText: {
    fontSize: 16,
    color: "#333",
    flex: 1,
  },
  statusText: {
    fontSize: 16,
    color: "#007bff",
  },
  textInput: {
    height: 80,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    backgroundColor: "#f9f9f9",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
  },
  statusItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  sendButton: {
    backgroundColor: "#00531b",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  sendButtonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default TicketDetailsScreen;
