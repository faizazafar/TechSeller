import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../ui/screens';
import ReactQueryClientProvider from '../services/ReactQueryClientProvider';

const Stack = createNativeStackNavigator();

export const AppNavigator = (): JSX.Element => {
    return (
        <ReactQueryClientProvider>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </ReactQueryClientProvider>
    );
};
