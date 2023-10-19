import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
// Screens
import HomeScreen from "./screens/Screen1";
import DetailScreen from "./screens/Screen2";
import { useState } from "react";
// Screen names
const homeName = "Home";
const detailName = "Detail";
const backName = "Back";
const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? "home" : "home-outline";
          } else if (rn === detailName) {
            iconName = focused ? "menu" : "list-outline";
          } else if (rn === backName) {
            iconName = focused ? "arrow-back" : "arrow-back-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "grey",
        labelStyle: { paddingBottom: 10, fontSize: 10 },
        style: { padding: 10, height: 70 },
      }}
      initialRouteName={homeName}
    >
      <Tab.Screen name={detailName} component={DetailScreen} />
      <Tab.Screen name={homeName} component={HomeScreen} />
      <Tab.Screen name="Back" component={HomeScreen} />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
