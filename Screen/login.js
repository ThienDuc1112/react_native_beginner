import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Text, TextInput, Alert } from "react-native";
import CustomButton from "../shared/customButton";
import { useSelector,useDispatch } from "react-redux";
import {setName,setAge} from '../redux/actions';
// import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SQLite from "expo-sqlite";
const database_name = "Mydata.db";
const database_version = "1.0";
const database_displayname = "User App Database";
const database_size = 200000;

const db = SQLite.openDatabase(
  database_name,
  database_version,
  database_displayname,
  database_size
);

export default function Login({ navigation }) {
  const {name,age} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  // const [nameUser, setName] = useState("");
  // const [age, setAge] = useState("");

  useEffect(() => {
    const initializeDatabase = async () => {
      try {
        await createTable();
        await getData();
      } catch (error) {
        console.log("Error opening the database:", error);
      }
    };
    initializeDatabase();
  }, []);

  const createTable = async () => {
    db.transaction((tx) => {
      tx.executeSql(`
      CREATE TABLE IF NOT EXISTS Users (
        id INTEGER PRIMARY KEY AUTOINCREMENT, 
        name TEXT,
        age INTEGER
      )
    `);
    });
  };

  const getData = () => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql("SELECT Name, Age FROM Users", [], (tx, result) => {
          (_, { rows }) => {
            resolve(rows._array);
            navigation.navigate("About");
          },
          (_, error) => {
            reject(error);
          }
        });
      });
    }
  )};

  const setData = async () => {
    if (name.length == 0 || age.length == 0) {
      Alert.alert("Warning!", "Please write your data.");
    } else {
      try {
        if (db) {
          dispatch(setName(name));
          dispatch(setAge(age));
           db.transaction(async (tx) => {
             tx.executeSql("INSERT INTO Users (name, age) VALUES (?,?)", [
              name,
              age,
            ]);
          });
          navigation.navigate("About");
        } else {
          console.log("Failed to open the database.");
        }
      } catch (error) {
        console.log("Error inserting data into the database:", error);
      }
    }
  };

  // const getData = () => {
  //   try{
  //       AsyncStorage.getItem('userData')
  //           .then(value => {
  //            if (value != null){
  //               navigation.navigate("About");
  //            }
  //       })
  //           }catch(error) {
  //               console.log(error);
  //           }
  //   }

  // const setData = async() => {
  //   if(nameUser.length == 0 || age.length == 0) {
  //       Alert.alert('Warning!', 'Please write your data.')
  //   }else{
  //       try {
  //           var user = {
  //               Name: nameUser,
  //               Age: age,
  //           }
  //           await AsyncStorage.setItem('userData',JSON.stringify(user));
  //           navigation.navigate('About');
  //       } catch (error) {
  //           console.log(error);
  //       }
  //   }
  // }

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Async Storage</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        onChangeText={(value) => dispatch(setName(value))}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your age"
        onChangeText={(value) => {
          dispatch(setAge(String(value)))
         }}
      />
      <CustomButton title="Login" color="#1eb900" onPressFunction={setData} />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    marginTop: 40,
    flex: 1,
    alignItems: "center",
    backgroundColor: "#0080ff",
  },
  logo: {
    width: 100,
    height: 100,
    margin: 20,
  },
  text: {
    fontSize: 30,
    color: "#ffffff",
    marginBottom: 130,
  },
  input: {
    width: 300,
    borderWidth: 1,
    borderColor: "#555",
    borderRadius: 10,
    backgroundColor: "#ffffff",
    textAlign: "center",
    fontSize: 20,
    marginBottom: 10,
  },
});
