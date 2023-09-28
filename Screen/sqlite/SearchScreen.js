import { useIsFocused } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Button,
} from "react-native";
import CustomButton from "../../shared/customButton";
import Database from "./Database";

export default function SearchScreen() {
  const [todo, setTodo] = useState([]);
  const [foundText, setFoundText] = useState("");
    const searchData = async () => {
      const data = await Database.search(foundText);
      setTodo(data);
      setFoundText('');
    };

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.text1}>{item.title} |</Text>
      <Text style={styles.text2}> {item.description}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Search</Text>
      <TextInput
        style={styles.textInput}
        value={foundText}
        onChangeText={setFoundText}
        placeholder="Search by title name"
      />
      <CustomButton
        style={styles.myButton}
        title="Search"
        color="#1eb900"
        onPressFunction={searchData}
      />
      <FlatList
        data={todo}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 20,
  },
  textInput: {
    borderRadius: 4,
    marginBottom: 16,
    padding: 8,
    backgroundColor: "#e2e3d5",
    marginHorizontal: 10,
  },
  myButton: {
    width: 370,
  },
  row: {
    marginHorizontal: 15,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c9d1d1',
    height: 70,
    borderRadius: 12
  },
  text1: {
    fontSize: 22,
    fontWeight: '400',
    color: '#3d4040'
  },
  text2: {
    fontSize: 22,
    fontSize: 22,
    fontWeight: '400',
    color: '#3d4040'
  }
});
