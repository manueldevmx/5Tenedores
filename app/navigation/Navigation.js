//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator}  from "@react-navigation/bottom-tabs"

//Stack de navegacion
import RestaurantsStack from './RestaurantsStack';
import FavoritesStack from "./FavoritesStack";
import AccountStack from './AccountStack';
import SearchStack from "./SearchStack";
import TopRestaurantsStack from './TopRestaurantsStack';



 const Tab = createBottomTabNavigator();

// create a component
export default function Navigation () {
    return (
      <NavigationContainer>
          <Tab.Navigator>
              <Tab.Screen 
              name="favorites" 
              component={FavoritesStack} 
              options={{title: "Favoritos", headerShown: false}} />
              <Tab.Screen 
              name="restaurants-stack" 
              component={RestaurantsStack} 
              options={{title:"Restaurantes",headerShown: false}} />
              <Tab.Screen 
              name="account-stack" 
              component={AccountStack} 
              options={{title: "Cuenta", headerShown: false}} />
              <Tab.Screen 
              name="search-stack" 
              component={SearchStack} 
              options={{title: "Busqueda", headerShown: false}} />
              <Tab.Screen 
              name="toprestaurants-stack" 
              component={TopRestaurantsStack} 
              options={{title: "Top 5", headerShown: false}} />
          </Tab.Navigator>
      </NavigationContainer>
    );
};


//make this component available to the app

