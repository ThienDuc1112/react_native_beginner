import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Alert,
  ToastAndroid,
} from "react-native";
import React, { useState } from "react";

export default function ShowToast() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const onPressHandler = () => {
    if (name.length > 3) {
      setSubmitted(!submitted);
    } else {
      // Alert.alert('Warning','the name must be longer than 3 characters', [
      //     {text:'OK', onPressHandler: () => console.warn('OK OK OK')},
      //     {text:'Close', onPressHandler: () => console.warn('Close')},
      // ],{cancelable: true});
      ToastAndroid.showWithGravity(
        "The name must be longer than 3 characters",
        ToastAndroid.LONG,
        ToastAndroid.CENTER
      );
    }
  };
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Please write your name:</Text>
      <TextInput
        style={styles.input}
        placeholder="your name"
        onChangeText={(value) => setName(value)}
      />
      <Pressable
        onPress={onPressHandler}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        android_ripple={{ color: "red" }}
        style={({ pressed }) => [
          { backgroundColor: pressed ? "#dddddd" : "#f08243" },
          styles.button,
        ]}
      >
        <Text style={styles.textBtn}>{submitted ? "Clear" : "Submit"}</Text>
      </Pressable>
      {submitted ? (
        <Text style={styles.text}>You are registered as {name}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    flexDirection: "column",
  },
  text: {
    color: "#000000",
    fontSize: 20,
    margin: 10,
  },
  textBtn: {
    fontSize: 16,
    paddingTop: 10,
    color: "white",
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: "#555",
    borderRadius: 5,
    textAlign: "center",
    fontSize: 20,
    marginBottom: 10,
  },
  button: {
    width: 150,
    height: 48,
    alignItems: "center",
    borderRadius: 5,
  },
});
