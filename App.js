import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverViewScreen from "./screens/MealsOverviewScreen";
// import * as React from "react";

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
          // options={{
          //   title: "All Categories",
          //   headerStyle: {
          //     backgroundColor: "#113f8a",
          //   },
          //   headerTintColor: "white",
          // }}
        />
        <Stack.Screen name="MealsOverview" component={MealsOverViewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
