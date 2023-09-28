import { StyleSheet, Text, View, TextInput, Alert,FlatList, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomButton from "../shared/customButton";
import * as SQLite from 'expo-sqlite';
import { useSelector,useDispatch } from "react-redux";
import {setName,setAge,increaseAge, getCity} from '../redux/actions';

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

export default function About({ navigation, route }) {
  // const [name, setName] = useState("");
  // const [age, setAge] = useState("");
  const {name,age,cities} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
    dispatch(getCity());
  }, [age]);

  const getData = () => {
    try {
      // AsyncStorage.getItem('userData')
      //     .then(value => {
      //         if(value != null) {
      //             let user = JSON.parse(value);
      //             setName(user.Name);
      //             setAge(user.Age);
      //         }
      //     });
      db.transaction((tx) => {
        tx.executeSql(`SELECT name, age FROM Users`, [], (tx, results) => {
          var len = results.rows.length;
          if (len > 0) {
            var userName = results.rows.item(0).name;
            var age = results.rows.item(0).age;
            dispatch(setName(userName));
            dispatch(setAge(age));
            // setName(userName);
            // setAge(age);
            console.log(userName + " " + age);
          }else{
            console.log("error")
          }
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  const updateData = async () => {
    if (name.length == 0) {
      Alert.alert("Warning", "Please enter a name");
    } else {
      try {
        // var user = {
        //   Name: name,
        // };
        // await AsyncStorage.mergeItem("userData", JSON.stringify(user));
        // Alert.alert("Success!", "Your data has been updated.");
        db.transaction((tx) => {
          tx.executeSql(
              "UPDATE Users SET Name=?",
              [name],
              () => { Alert.alert('Success!', 'Your data has been updated.') },
              error => { console.log(error) }
          )
      })
      } catch (error) {
        console.log(error);
      }
    }
  };

  const removeData = async () => {
    try {
      // await AsyncStorage.removeItem("userData");
      db.transaction((tx) => {
        tx.executeSql(
            "DELETE FROM Users",
            [],
            () => { navigation.navigate('Login') },
            error => { console.log(error) }
        )
    })
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Welcome {name} !</Text>
      <Text style={styles.text}>Your age is {age.toString()}</Text>
      <FlatList 
        data={cities}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
             navigation.navigate('Map',{
              city: item.city,
              longitude: item.longitude,
              latitude: item.latitude
             });
            }}
          >
          <View style={styles.itemView}>
            <Text>{item.country}</Text>
            <Text>{item.city}</Text>
          </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item,index) => index.toString()}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={(value) => dispatch(setName(value))}
      />
      <CustomButton
        title="Update"
        color="#ff7f00"
        onPressFunction={updateData}
      />
      <CustomButton
        title="Remove"
        color="#f40100"
        onPressFunction={removeData}
      />
      <CustomButton
        title="Update"
        color="#f44100"
        onPressFunction={() => {dispatch(increaseAge)}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    fontSize: 40,
    margin: 10,
  },
  input: {
    width: 300,
    borderWidth: 1,
    borderColor: "#555",
    borderRadius: 10,
    backgroundColor: "#ffffff",
    textAlign: "center",
    fontSize: 20,
    marginTop: 130,
    marginBottom: 10,
  },
  itemView:{
    paddingVertical:20,
    paddingHorizontal:90,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'pink',
  },
});
