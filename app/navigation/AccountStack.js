import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Account from '../screens/Account/Account';
import Login from '../screens/Account/Login';
import Register from '../screens/Account/Register';


const Stack = createNativeStackNavigator();


export default function AccountStack( ) {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="account"
                component={Account}
                options={{title: "Mi Cuenta"}}
            />
             <Stack.Screen
                name="login"
                component={Login}
                options={{title: "Iniciar sesión", }}
            />
            <Stack.Screen
                name="register"
                component={Register}
                options={{title: "Crear cuenta", }}
            />
            
        </Stack.Navigator>
    )
}