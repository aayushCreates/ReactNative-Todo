import { api } from "@/convex/_generated/api";
import useTheme, { ColorScheme } from "@/hooks/useTheme";
import { useMutation, useQuery } from "convex/react";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { toggleDarkMode, colors } = useTheme();
  const styles = createStyles(colors);

  return (
    <View style={styles.container}>
      <Text style={styles.content}>Welcome to My World...</Text>

      <TouchableOpacity
        style={{
          padding: 4,
          backgroundColor: "red",
        }}
        onPress={toggleDarkMode}
      >
        <Text
          style={{
            color: "white",
          }}
        >
          Toggle Mode
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const createStyles = (colors: ColorScheme)=> {
  const styles = StyleSheet.create({
    container: {
      flex: 1, //  in APP -> col dir
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.bg,
      gap: 25,
    },
    content: {
      fontSize: 25,
      color: "white",
    },
  });

  return styles;
}