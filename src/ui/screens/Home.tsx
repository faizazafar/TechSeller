import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IImageModes } from '../../types';
import { SubmitButton } from '../elements';
import { styles } from '../theme/GeneralTheme';
import { actions } from '../../store';

export const Home = (): JSX.Element => {
    return (
        <SafeAreaView style={styles.parentView}>
            <View>
                <Text style={styles.homeText}>Home</Text>

                <SubmitButton
                    title="Logout"
                    mode={IImageModes.contained}
                    icon="logout"
                    onPress={() => {
                        actions.setIsLoggedIn(false);
                    }}
                />
            </View>
        </SafeAreaView>
    );
};
