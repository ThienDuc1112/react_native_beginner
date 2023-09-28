import { StyleSheet, Text, View, Button, Image } from "react-native";
import React from "react";
import Card from "../shared/card";
import {globalStyles, images} from "../styles/global/"

export default function ViewDetail({ navigation, route }) {
  const { title, rating, body, key } = route.params;
  const pressHandler = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <Card>
        <Text> {title}</Text>
        <Text> {body}</Text>
        <View style={styles.rating}>
          <Text> GameZone Rating: {rating}</Text>
          <Image source={images.ratings[rating]}/>
        </View>
      </Card>
      {/* <Button title='Go back to home' onPress={pressHandler} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
