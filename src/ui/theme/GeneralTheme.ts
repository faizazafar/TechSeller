import { DefaultTheme } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#fff',
        accent: 'yellow',
        secondary: 'black',
        gray: 'gray',
    },
};

export const styles = StyleSheet.create({
    parentView: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: theme.colors.primary,
    },
    homeText: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
    },
    menuWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 4,
        padding: 6,
    },
    MenuBtns: {
        width: 300,
        height: 300,
    },
    welcomemenu: {
        backgroundColor: theme.colors.gray,
        color: theme.colors.primary,
        padding: 7,
        width: 200,
    },
    welcomeContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
    },
});
