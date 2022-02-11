import React, {useEffect} from 'react';
import Navigation from './app/navigation/Navigation';
import { firebaseApp } from './app/utils/firebase';
import * as firebase from "firebase";


export default function App() {

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user)
    })
  }, [])
  

  return (
    <Navigation/>
  );
}
