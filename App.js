import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverViewScreen from "./screens/MealsOverviewScreen";
// import * as React from "react";
import MealDetailScreen from "./screens/MealDetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#0f254a" },
          headerTintColor: "white",
          contentStyle: { backgroundColor: "#113f8a" },
        }}
      >
        <Stack.Screen
          name="MealsCategories"
          component={CategoriesScreen}
          // DIFFERENT OPTIONS FOR NAVIGATION SCREEN:
          // options={{
          //   title: "All Categories",
          //   headerStyle: {
          //     backgroundColor: "#113f8a",
          //   },
          //   headerTintColor: "white",
          // }}
          // options={({ route, navigation }) => {
          //   return {
          //     title: route.params.categoryId,
          //   };
          // }}
        />
        <Stack.Screen name="MealsOverview" component={MealsOverViewScreen} />
        <Stack.Screen name="MealDetails" component={MealDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
