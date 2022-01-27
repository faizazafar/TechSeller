import React from 'react';
import { Button, View } from 'react-native';
import { Text, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { actions } from '../../store';
import { SubmitButton } from '../elements';
import Logo from '../elements/Logo/Logo';
import { styles } from '../theme/GeneralTheme';

export const Menu = (): JSX.Element => {
    return (
        <SafeAreaView style={styles.parentView}>
            <View>
                <Logo />

                <View style={styles.welcomeContainer}>
                    <Text style={styles.welcomemenu}>
                        Welcome in SalesBey Menu
                    </Text>
                </View>

                <View style={styles.menuWrapper}>
                    <Button title="Order Booking" color="gray" />
                    <Button
                        title="Store Tagging"
                        color="gray"
                        style={styles.MenuBtns}
                    />
                </View>
                <View style={styles.menuWrapper}>
                    <Button
                        title="Spot Selling"
                        color="gray"
                        style={styles.MenuBtns}
                    />
                    <Button
                        title="Merchandizing"
                        color="gray"
                        style={styles.MenuBtns}
                        onPress={() => {
                            actions.setIsLoggedIn(true);
                        }}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};
