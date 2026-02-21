import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>Welcome to My World...</Text>

      <Link href={'/about'} style={styles.about}>About</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    //  in APP -> col dir
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    gap: 25
  },
  content: {
    fontSize: 25,
    color: "white",
    shadowColor: "white"
  },
  about: {
    fontSize: 25,
    color: "white",
    shadowColor: "white",
    borderWidth: 1,
    padding: 10,
    borderColor: "white"
  }
});
