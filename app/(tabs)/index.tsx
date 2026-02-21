import useTheme from "@/hooks/useTheme";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { toggleDarkMode } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={styles.content}>Welcome to My World...</Text>

      <TouchableOpacity
        style={{
          borderWidth: 1,
          padding: 4,
          borderBlockColor: "white"
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

const styles = StyleSheet.create({
  container: {
    flex: 1, //  in APP -> col dir
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#37353E",
    gap: 25,
  },
  content: {
    fontSize: 25,
    color: "white",
  },
});
