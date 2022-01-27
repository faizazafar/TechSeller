import React from 'react';
import { View } from 'react-native';
import { Text, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { navigate } from '../../navigators/navigationService';
import { actions } from '../../store';
import { SubmitButton } from '../elements';
import Logo from '../elements/Logo/Logo';
import { styles } from '../theme/GeneralTheme';

export const OPT = (): JSX.Element => {
    return (
        <SafeAreaView style={styles.parentView}>
            <View>
                <Logo />
                <Text style={{ paddingLeft: 20, fontSize: 15, margin: 2 }}>
                    OPT Code
                </Text>

                <TextInput label="OPT" placeholder="Enter OTP Code" />
                <SubmitButton
                    title="Verify OTP"
                    onPress={() => {
                        // actions.setIsLoggedIn(true);
                        navigate('Menu');
                    }}
                />
            </View>
        </SafeAreaView>
    );
};
