import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Account from '../screens/Account/Account';
import Login from '../screens/Account/Login';


const Stack = createNativeStackNavigator();


export default function AccountStack( ) {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="account"
                component={Account}
                option={{title: "Mi Cuenta"}}
            />
             <Stack.Screen
                name="login"
                component={Login}
                option={{title: "Iniciar sesión", }}
            />
            
        </Stack.Navigator>
    )
}