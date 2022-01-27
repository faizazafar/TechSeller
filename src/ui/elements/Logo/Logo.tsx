import React from 'react';
import { View, Text, Image } from 'react-native';
import LogoImage from '../../../assets/logo.jpeg';

const Logo = () => {
    return (
        <View
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Image source={LogoImage} style={{ width: 300, height: 150 }} />
        </View>
    );
};

export default Logo;
