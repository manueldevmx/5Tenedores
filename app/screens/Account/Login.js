//import liraries
import React, { useRef } from "react";
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
import { Divider } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-easy-toast";
import LoginForm from "../../components/Account/LoginForm";
import LoginFacebook from "../../components/Account/LoginFacebook";
// create a component
const Login = () => {
    return (
        <ScrollView>
            <View style={styles.viewContainer}>
        <LoginForm toastRef={toastRef} />
        <CreateAccount />
      </View>
      <Divider style={styles.divider} />
      <View style={styles.viewContainer}>
        <LoginFacebook toastRef={toastRef} />
      </View>
      <Toast ref={toastRef} position="center" opacity={0.9} />
    </ScrollView>
        
    );
};

function CreateAccount() {
    const navigation = useNavigation();
  
    return (
      <Text style={styles.textRegister}>
        ¿Aún no tienes una cuenta?{" "}
        <Text
          style={styles.btnRegister}
          onPress={() => navigation.navigate("register")}
        >
          Regístrate
        </Text>
      </Text>
    );
  }

// define your styles
const styles = StyleSheet.create({
    logo: {
      width: "100%",
      height: 150,
      marginTop: 20,
    },
    viewContainer: {
      marginRight: 40,
      marginLeft: 40,
    },
    textRegister: {
      marginTop: 15,
      marginLeft: 10,
      marginRight: 10,
    },
    btnRegister: {
      color: "#FFC753",
      fontWeight: "bold",
    },
    divider: {
      backgroundColor: "#63F1D0",
      margin: 40,
    },
  });

//make this component available to the app
export default Login;
