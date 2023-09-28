import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityBase,
  useWindowDimensions,
} from "react-native";
import { data } from "./questions";
import Component from "./component";

export default function Competition() {
  const windowDimensions = useWindowDimensions();
  const [Time, setTime] = useState("120");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [question, setQuestion] = useState(data);
  const onSelectOption = (index, x) => {
    const temptArr = question;
    temptArr.map((item, i) => {
      if (index == i) {
        item.mark = x;
      }
    });
    let temp = [];
    temptArr.map((item) => {
      temp.push(item);
    });
    setQuestion(temp);
  };
  useEffect(() => {
    if (Time <= 0) {
      console.log("end");
    } else {
      const timer = setInterval(() => {
        setTime((pre) => pre - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [Time]);

  const formatTime = (passedTime) => {
    const minutes = Math.floor(passedTime / 60);
    const seconds = passedTime % 60;
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  const handleScroll = (event) => {
    const { contentOffset } = event.nativeEvent;
    const x = contentOffset.x / windowDimensions.width;
    setCurrentIndex(Math.round(x));
  };

  const scrollRef = useRef(null);

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>
        English Questions: {currentIndex + 1}/{data.length}
      </Text>
      <Text style={styles.timeRemaining}>{formatTime(Time)}</Text>
      <View style={styles.frame}>
        <FlatList
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={handleScroll}
          ref={scrollRef}
          data={question}
          renderItem={({ item, index }) => {
            return (
              <Component
                data={item}
                index={index}
                selectedOption={(x) => {
                  onSelectOption(index, x);
                }}
              />
            );
          }}
        />
        <View style={styles.navigation}>
          <TouchableOpacity
            style={styles.myButton}
            onPress={() => {
              const preIndex = currentIndex - 1 < 0 ? 0 : currentIndex - 1;
              scrollRef.current?.scrollToIndex({
                animated: true,
                index: preIndex,
                viewPosition: 0.5,
                duration: 500,
              });
              setCurrentIndex(preIndex);
            }}
          >
            <Text style={{ color: "#fff" }}>Previous</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.myButton}
            onPress={() => {
              const nextIndex = currentIndex + 1 > data.length ? 0 : currentIndex + 1;
              scrollRef.current?.scrollToIndex({
                animated: true,
                index: nextIndex,
                viewPosition: 0.5,
                duration: 500,
              });
              setCurrentIndex(nextIndex);
            }}
          >
            <Text style={{ color: "#fff" }}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headingText: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 20,
    fontWeight: "600",
    color: "#06c7bd",
  },
  timeRemaining: {
    marginLeft: "auto",
    marginRight: 20,
    marginTop: 20,
    fontSize: 23,
    color: "#067dc7",
  },
  frame: {
    paddingTop: 20,
    marginHorizontal: 0,
  },
  navigation: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    top: 500,
    bottom: 10,
  },
  myButton: {
    backgroundColor: "purple",
    height: 50,
    width: 100,
    borderRadius: 10,
    marginLeft: 50,
    marginRight: 80,
    justifyContent: "center",
    alignItems: "center",
  },
});
