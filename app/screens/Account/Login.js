//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet , Image} from 'react-native';

// create a component
const Login = () => {
    return (
        <View style={styles.container}>
            <Image
        source={require("../../../assets/palm.png")}
        resizeMode="cover"
        style={styles.image}
      />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
});

//make this component available to the app
export default Login;
