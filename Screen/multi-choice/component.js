import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
const { height, width } = Dimensions.get("window");

export default function Component({ data, index, selectedOption }) {
    let mark = data.mark;
  return (
    <View style={{ width: width }}>
      <Text style={styles.question}>
        {index + 1}. {data.question}
      </Text>
      <FlatList
        data={data.options}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity style={styles.option(index, mark)}
            onPress={() => {
                selectedOption(index+1)
            }}>
              <View style={styles.cricle}></View>
              <Text
                style={{
                  fontWeight: "600",
                  marginLeft: 24,
                  position: "absolute",
                }}
              >
                {index == 0 ? "A" : index == 1 ? "B" : index == 2 ? "C" : "D"}
              </Text>
              <Text
                style={{
                  paddingLeft: 10,
                  fontSize: 18,
                  fontWeight: "600",
                  color: (index+1)===mark? '#fff' : 'black'
                }}
              >
                {item}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  question: {
    paddingLeft: 10,
    fontSize: 16,
    fontWeight: "500",
    color: "black",
    fontFamily: "DMMedium",
  },
  option:(index,mark) => ({
    width: "90%",
    height: 60,
    elevation: 3,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 15,
    backgroundColor:(index+1)===mark? "#8412b5":"#fff",
  }),
  cricle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#86f7f2",
  },
});
