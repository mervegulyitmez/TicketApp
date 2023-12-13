import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTicketContext } from "./../context/TicketContext";
import filterIcon from "./../icon/filter.png"; // Change the path as needed

const TicketListScreen = () => {
  const { tickets } = useTicketContext();
  const [filterStatus, setFilterStatus] = useState("All");
  const [isModalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation(); // Hook for navigation

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleStatusChange = (selectedItem) => {
    setFilterStatus(selectedItem);
    toggleModal();
  };

  const getStatusStyle = (status) => {
    switch (status.toLowerCase()) {
      case "new":
        return styles.newStatus;
      case "in progress":
        return styles.inProgressStatus;
      case "resolved":
        return styles.resolvedStatus;
      default:
        return styles.defaultStatus;
    }
  };

  const filteredTickets =
    filterStatus === "All"
      ? tickets
      : tickets.filter(
          (ticket) => ticket.status.toLowerCase() === filterStatus.toLowerCase()
        );

  const handleTicketPress = (ticketId) => {
    navigation.navigate("TicketDetailsScreen", { ticketId });
  };

  // Modal content
  const modalContent = (
    <View style={styles.modalContent}>
      <Text style={styles.modalTitle}>Filter by Status</Text>
      <TouchableOpacity
        style={styles.statusItem}
        onPress={() => handleStatusChange('All')}
      >
        <Text style={styles.allStatus}>All</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.statusItem}
        onPress={() => handleStatusChange('New')}
      >
        <Text style={styles.defaultStatus}>New</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.statusItem}
        onPress={() => handleStatusChange('In Progress')}
      >
        <Text style={styles.defaultStatus}>In Progress</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.statusItem}
        onPress={() => handleStatusChange('Resolved')}
      >
        <Text style={styles.defaultStatus}>Resolved</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ticket List</Text>
      <TouchableOpacity style={styles.filterButton} onPress={toggleModal}>
        <Text>Filter by Status</Text>
        <Image
          source={filterIcon}
          fadeDuration={0}
          style={{ width: 15, height: 15 }}
        />
      </TouchableOpacity>

      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={toggleModal}
      >
        <TouchableWithoutFeedback onPress={toggleModal}>
          <View style={styles.modalContainer}>
            {modalContent}
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      {filteredTickets.length === 0 ? (
        <Text>No tickets available.</Text>
      ) : (
        <FlatList
          data={filteredTickets}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleTicketPress(item.id)}>
              <View style={styles.ticketItem}>
                <Text style={styles.ticketTitle}>Ticket ID: {item.id}</Text>
                <Text>Name: {item.name}</Text>
                <Text>Email: {item.email}</Text>
                <Text>
                  Status:{" "}
                  <Text style={[styles.status, getStatusStyle(item.status)]}>
                    {item.status}
                  </Text>
                </Text>
                <Text>Description: {item.description}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  filterButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  ticketItem: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  ticketTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  status: {
    fontWeight: "bold",
  },
  newStatus: {
    color: "green",
  },
  inProgressStatus: {
    color: "orange",
  },
  resolvedStatus: {
    color: "blue",
  },
  defaultStatus: {
    color: "#333",
  },
  allStatus: {
    fontWeight:'400',
    color: "#333",
  },
  // Modal styles
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
    width: "80%",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  statusItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});

export default TicketListScreen;
