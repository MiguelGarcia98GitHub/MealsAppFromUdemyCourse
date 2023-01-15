import { useNavigation } from "@react-navigation/native";
import { View, Pressable, Text, Image, StyleSheet } from "react-native";
import MealDetails from "./MealDetails";

export default function MealItem(props) {
  const navigation = useNavigation();

  function selectMealItemHandler() {
    navigation.navigate("MealDetails", {
      mealId: props.id,
    });
  }

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={selectMealItemHandler}
      >
        <View>
          <View>
            <Image source={{ uri: props.imageURL }} style={styles.image} />
            <Text style={styles.title}> {props.title} </Text>
          </View>
          <MealDetails
            duration={props.duration}
            complexity={props.complexity}
            affordability={props.affordability}
          />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 8,
    shadowColor: "black",
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  image: {
    width: "100%",
    height: 200,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  title: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "center",
    padding: 4,
  },
  infoContainer: {
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
