
//import liraries
import React, { useState, useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as firebase from "firebase";import UserGuest from './UserGuest';
import UserLogged from './UserLogged';
import Loading from '../../components/Loading';



// create a component
const Account = () => {
 const [login, setLogin] = useState(null); 

 useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
        !user  ? setLogin(false) : setLogin(true);
    });
 }, [])

    if (login === null) return  <Loading isVisible={true} text="Cargando..."/>;
    console.log("activado", Loading)
       
    

   return login ?  <UserLogged/> : <UserGuest/>;
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E2E2E2',
    },
});

//make this component available to the app
export default Account;
