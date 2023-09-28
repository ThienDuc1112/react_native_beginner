import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./routes/drawer";
import {Provider} from 'react-redux';
import {Store} from './redux/store';

import LoginScreen from './Screen/formHandling/loginScreen';

// const getFonts = () =>
//   Font.loadAsync({
//     "nunito-regular": require("./assets/font/Nunito-Regular.ttf"),
//     "nunito-bold": require("./assets/font/Nunito-Bold.ttf"),
//   });

export default function App() {

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'DMBold': require('./assets/font/DMSans-Bold.ttf'),
        'DMMedium': require('./assets/font/DMSans-Medium.ttf'),
        'DMRegular': require('./assets/font/DMSans-Regular.ttf'),
      });
    }
    loadFonts();
  }, []);
    return (
     <Provider store={Store}>
       <NavigationContainer>
        <Navigator />
      </NavigationContainer>
     </Provider>
    // <LoginScreen />
    );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
