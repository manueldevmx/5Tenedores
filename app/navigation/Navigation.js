//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";

//Stack de navegacion
import RestaurantsStack from "./RestaurantsStack";
import FavoritesStack from "./FavoritesStack";
import AccountStack from "./AccountStack";
import SearchStack from "./SearchStack";
import TopRestaurantsStack from "./TopRestaurantsStack";

const Tab = createBottomTabNavigator();

// create a component
export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="account"
        tabBarOptions={{
          inactiveTintColor: "#5CB1CF",
          activeTintColor: "#52DFFF",
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color),
        })}
      >
              <Tab.Screen
          name="account-stack"
          component={AccountStack}
          options={{ title: "Cuenta", headerShown: false }}
        />
        <Tab.Screen
          name="favorites-stack"
          component={FavoritesStack}
          options={{ title: "Favoritos", headerShown: false }}
        />
        <Tab.Screen
          name="restaurants-stack"
          component={RestaurantsStack}
          options={{ title: "Lugares", headerShown: false }}
        />

        <Tab.Screen
          name="search-stack"
          component={SearchStack}
          options={{ title: "Busqueda", headerShown: false }}
        />
        <Tab.Screen
          name="toprestaurants-stack"
          component={TopRestaurantsStack}
          options={{ title: "Top 5", headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function screenOptions(route, color) {
  let iconName;

  switch (route.name) {
    case "favorites-stack":
      iconName = "heart";
      break;
    case "restaurants-stack":
        iconName = "map";
        break;
    case "account-stack":
        iconName = "home";
        break;
    case "search-stack":
        iconName = "crosshairs";
        break;
    case "toprestaurants-stack":
        iconName = "star";
        break;
    default:
      break;
  }

  return (
    <Icon type="font-awesome" name={iconName} size={22} color={color} />
  );
}

