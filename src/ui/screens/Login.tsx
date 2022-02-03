import React from 'react';
import { useState } from 'react';
import { Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IImageModes, ILoginPayload } from '../../types';
import { SubmitButton } from '../elements';
import { TextInput } from '../elements';
import { styles } from '../theme/GeneralTheme';
import { actions } from '../../store';
import { navigate, navigationRef } from '../../navigators/navigationService';
import { Text } from 'react-native-paper';
import Logo from '../elements/Logo/Logo';
import * as yup from 'yup';
import { Formik } from 'formik';
import { Alert } from 'react-native';
import { serialize } from '../../utils/helpers';

export const Login = (): JSX.Element => {
    const [username, setUsername] = useState('');

    const myapicall = (payload: ILoginPayload) => {
        Alert.alert('asdasdd')
        console.log(JSON.stringify(payload));
        var myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow',
        };

        fetch(
            'https://virtserver.swaggerhub.com/abc5553/mofaic/1.0.0/login??'+`${serialize(payload)}`,
            requestOptions
        )
            .then((response) => response.text())
            .then((result) => {
                console.log(result)
                navigate('OTP');
            })
            .catch((error) => console.log('error', error));
    };

    return (
        <Formik
            initialValues={{
                accountCode: '',
                userCode: '',
                password: '',
            }}
            onSubmit={(values) => {
                // myapicall('hello');
                // setUsername(values.username)
                // Alert.alert(JSON.stringify(values));
                // console.log(values.accountCode);
                // console.log(values.username);
                // console.log(values.password);
                myapicall(values);
                // navigate('OTP');
            }}
            validationSchema={yup.object().shape({
                accountCode: yup
                    .string()
                    .required('Please, provide account code !'),
                userCode: yup.string().required('Please, provide username!'),
                password: yup
                    .string()
                    .min(4)
                    .max(10, 'Password should not excced 10 chars.')
                    .required('Please provide password'),
            })}
        >
            {({
                values,
                handleChange,
                errors,
                setFieldTouched,
                touched,
                isValid,
                handleSubmit,
            }) => (
                <SafeAreaView style={styles.parentView}>
                    <View>
                        <Logo />
                        {/* Account Code */}
                        <View style={{ padding: 10 }}>
                            <TextInput
                                value={values.accountCode}
                                label="Acount Code"
                                placeholder="Enter Account Code"
                                onChangeText={handleChange('accountCode')}
                                onBlur={() => setFieldTouched('accountCode')}
                            />
                            {touched.accountCode && errors.accountCode && (
                                <Text
                                    style={{ fontSize: 12, color: '#FF0D10' }}
                                >
                                    {errors.accountCode}
                                </Text>
                            )}
                            {/* User Name */}
                            <TextInput
                                value={values.userCode}
                                label="User Name"
                                placeholder="Enter UserCode"
                                onChangeText={handleChange('userCode')}
                                onBlur={() => setFieldTouched('userCode')}
                            />
                            {touched.userCode && errors.userCode && (
                                <Text
                                    style={{ fontSize: 12, color: '#FF0D10' }}
                                >
                                    {errors.userCode}
                                </Text>
                            )}
                            {/* Password */}
                            <TextInput
                                value={values.password}
                                label="Password"
                                placeholder="Enter Password"
                                onChangeText={handleChange('password')}
                                onBlur={() => setFieldTouched('password')}
                            />
                            {touched.password && errors.password && (
                                <Text
                                    style={{ fontSize: 12, color: '#FF0D10' }}
                                >
                                    {errors.password}
                                </Text>
                            )}

                            <SubmitButton
                                title="Sign in"
                                mode={IImageModes.contained}
                                onPress={handleSubmit}
                            />
                        </View>
                    </View>
                </SafeAreaView>
            )}
        </Formik>
    );
};
