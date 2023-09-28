import React, { useState } from "react";
import { View, TextInput,Text, Button, Alert, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Checkbox from "expo-checkbox";

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("USA");
  const [isChecked, setChecked] = useState(false);

  const handleLogin = () => {
    if (validateInputs()) {
      navigation.navigate("Profile", {
        email,
        selectedCountry,
        isChecked,
      });
    }else{
        const message = `Email: ${email}\nPassword: ${password}\nCountry: ${selectedCountry}\nAccept Terms: ${
            isChecked ? "Yes" : "No"
          }`;
          Alert.alert("Login Information", message);
    }
  };
  const validateInputs = () => {
    // Basic email format validation using a regular expression.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !password) {
      Alert.alert("Error", "Email and password are required.");
      return false;
    } else if (!emailRegex.test(email)) {
      Alert.alert("Error", "Please enter a valid email address.");
      return false;
    }
    return true;
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <Picker
        style={styles.picker}
        selectedValue={selectedCountry}
        onValueChange={(itemValue) => setSelectedCountry(itemValue)}
      >
        <Picker.Item label="USA" value="USA" />
        <Picker.Item label="Canada" value="Canada" />
        <Picker.Item label="UK" value="UK" />
        <Picker.Item label="Australia" value="Australia" />
      </Picker>
      <View style={styles.checkboxContainer}>
        <Checkbox value={isChecked} onValueChange={setChecked} />
        <Text style={styles.label}>I accept the terms and conditions</Text>
      </View>
      <Button title="Login" onPress={handleLogin} />
      <Button title="Request" onPress={() => navigation.navigate("Request")}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  picker: {
    height: 40,
    borderColor: "red",
    borderWidth: 1,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    marginLeft: 8,
  },
  label: {
    marginLeft: 8,
  },
});
