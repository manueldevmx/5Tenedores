import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Account from '../screens/Account';

const Stack = createNativeStackNavigator();


export default function AccountStack( ) {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="account"
                component={Account}
                option={{title: "Cuenta"}}
            />
            
        </Stack.Navigator>
    )
}