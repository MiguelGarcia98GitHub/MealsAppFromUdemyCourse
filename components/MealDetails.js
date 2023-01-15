import { View, Text, StyleSheet } from "react-native";

export default function MealDetails({ duration, complexity, affordability }) {
  console.log(duration);
  console.log(complexity);
  console.log(affordability);
  return (
    <View style={styles.container}>
      <Text style={styles.textItem}>{duration} minutes</Text>
      <Text style={styles.textItem}>{complexity.toUpperCase()}</Text>
      <Text style={styles.textItem}>{affordability.toUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    border: 8,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    width: "100%",
  },
  textItem: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
