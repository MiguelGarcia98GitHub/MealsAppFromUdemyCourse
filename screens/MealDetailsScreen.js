import { Text, View, Image, StyleSheet, ScrollView } from "react-native";

import { MEALS } from "../data/dummy-data";
import MealDetails from "./../components/MealDetails";

export default function MealDetailsScreen({ route }) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  console.log(selectedMeal);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
      />
      <Text style={styles.ingredients_subtitle}>Ingredients</Text>
      <View style={styles.ingredients_container}>
        {selectedMeal.ingredients.map((ingredient) => (
          <Text style={styles.ingredients} key={ingredient}>
            {ingredient}
          </Text>
        ))}
      </View>
      <Text style={styles.steps_subtitle}>Steps</Text>
      <View style={styles.steps_container}>
        {selectedMeal.steps.map((step) => (
          <Text style={styles.steps} key={step}>
            {step}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    color: "white",
  },
  ingredients_subtitle: {
    marginTop: 30,
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    textAlign: "center",
    width: "100%",
  },
  steps_subtitle: {
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
  ingredients_container: {
    padding: 20,
    alignItems: "center",
    width: "100%",
  },
  steps_container: {
    padding: 20,
    alignItems: "center",
    width: "100%",
  },
  ingredients: {
    marginTop: 20,
    borderRadius: 16,
    padding: 10,
    textAlign: "center",
    color: "white",
    backgroundColor: "#660033",
    width: "80%",
  },
  steps: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    textAlign: "left",
    color: "white",
    marginTop: 20,
    borderRadius: 16,
    padding: 10,
    textAlign: "center",
    color: "white",
    backgroundColor: "#660033",
    width: "80%",
  },
});
