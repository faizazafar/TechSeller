import React from 'react';
import { actions } from './store';
import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from './ui/theme';
import {
    NavigationContainer,
    NavigationContainerRef,
} from '@react-navigation/native';
import { setTopLevelNavigator } from './navigators/navigationService';
import { AppNavigator, AuthNavigator } from './navigators';

const App = (): JSX.Element => {
    const auth = actions.getAuthState();

    return (
        <PaperProvider theme={theme}>
            <NavigationContainer
                ref={(
                    navigatorRef: NavigationContainerRef<ReactNavigation.RootParamList> | null
                ) => {
                    setTopLevelNavigator(navigatorRef);
                }}
            >
                {auth.isLogin ? <AppNavigator /> : <AuthNavigator />}
            </NavigationContainer>
        </PaperProvider>
    );
};

export default App;
