{/*Screen para usuarios no logueados INVITADOS  */}

import React from "react";
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function UserGuest() {
  const navigation = useNavigation();

  return (
    <ScrollView centerContent={true} style={styles.viewBody}>
      <Image
        source={require("../../../assets/Guest.png")}
        resizeMode="contain"
        style={styles.image}
      />
      <Text style={styles.title}>Crea tu perfil</Text>
      <Text style={styles.description}>
        ¿Como describirías tu mejor lugar en Coatzacoalcos? Busca y visualiza los mejores
        sitios de una forma sencilla y vota cual te ha gustado más.
      </Text>
      <View style={styles.viewBtn}>
        <Button
          title="Ver tu perfil"
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          onPress={() => navigation.navigate("login")}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
   paddingHorizontal:30,
    backgroundColor: '#DCF9FD',
   
  },
  image: {
    height: 300,
    width: "100%",
    marginBottom: 40,
    marginHorizontal: 0,
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    marginBottom: 20,
  },
  viewBtn: {
    flex: 1,
    alignItems: "center",
  },
  btnStyle: {
    backgroundColor: "#FFC753",
  },
  btnContainer: {
    width: "70%",
  },
});