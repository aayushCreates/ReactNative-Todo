import React from "react";
import { Text, View } from "react-native";

const About = () => {
  return (
    <View
      style={{
        flex: 1, //  in APP -> col dir
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        gap: 25,
      }}
    >
      <Text style={{
        fontSize: 20
      }}>This is About Screen</Text>
    </View>
  );
};

export default About;
