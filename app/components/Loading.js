//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Overlay } from 'react-native-elements';


// create a component
const Loading = (props) => {
    const {isVisible, text} = props;


    return (
       <Overlay
        isVisible={false}
        windowBackgroundColor="rgba(0,0,0,0.5)"
        overlyaBackgroundColor="transparent"
        overlayStyle={styles.overlay}
       >
           <View style={styles.view}>
               <ActivityIndicator
               size="large"
               color="61F4AD" />
               {text && <Text>{text}</Text>}
           </View>
       </Overlay>
    );
};

// define your styles
const styles = StyleSheet.create({
    overlay: {
        height:100,
        width: 200,
        backgroundColor: "#61F4AD",
        borderRadius: 10,
    },
    view: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color:"#0F4E66" ,
        marginTop: 9,
    }
});

//make this component available to the app
export default Loading;
