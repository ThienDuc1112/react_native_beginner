import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import Card from "../shared/card";

import { globalStyles } from "../styles/global";
import ReviewForm from "./reviewForm";

export default function Home({ navigation }) {
  const [modalStatus, setModalStatus] = useState(false);
  const [reviews, setReviews] = useState([
    { title: "Humand and animals", rating: 5, body: "lorem ipsum", key: 1 },
    { title: "The dark night", rating: 4, body: "lorem ipsum", key: 2 },
    { title: "Joker and his friends", rating: 3, body: "lorem ipsum", key: 3 },
  ]);

  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((curentReviews) => {
      return [...curentReviews, review];
    });
    setModalStatus(false);
  };

  const handleRemoveProduct = (id) => {
    const updatedReview = reviews.filter((review) => review.key !== id);
    setReviews(updatedReview);
  };

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalStatus} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons
              name="close"
              size={24}
              onPress={() => setModalStatus(false)}
              style={{ ...styles.modalToggle, ...styles.modalClose }}
            />
            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <MaterialIcons
        name="add"
        size={24}
        onPress={() => setModalStatus(true)}
        style={styles.modalToggle}
      />

      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ViewDetail", item)}
          >
            <Card style={styles.myRow}>
              <Text style={styles.titleText}>{item.title}</Text>
              <MaterialIcons
                name="delete"
                size={24}
                onPress={() => handleRemoveProduct(item.key)}
                style={styles.removeIcon}
              />
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  titleText: {
    fontSize: 22,
    marginRight: 10,
  },
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#cfd0d1",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
  myRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  removeIcon: {
    color: "red",
    marginLeft: "auto",
  },
});
