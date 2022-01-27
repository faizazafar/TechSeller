import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../ui/screens';
import ReactQueryClientProvider from '../services/ReactQueryClientProvider';
import { OPT } from '../ui/screens/OPT';
import { Menu } from '../ui/screens/Menu';

const Stack = createNativeStackNavigator();

export const AuthNavigator = (): JSX.Element => {
    return (
        <ReactQueryClientProvider>
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="OTP"
                    component={OPT}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Menu"
                    component={Menu}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </ReactQueryClientProvider>
    );
};
