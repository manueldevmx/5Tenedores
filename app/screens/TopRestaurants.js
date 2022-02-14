//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const TopRestaurants = () => {
    return (
        <View style={styles.container}>
            <Text>TopRestaurants</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3999BE',
    },
});

//make this component available to the app
export default TopRestaurants;
