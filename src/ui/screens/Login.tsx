import React, { useState } from 'react';
import { Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IImageModes } from '../../types';
import { SubmitButton } from '../elements';
import { TextInput } from '../elements';
import { styles } from '../theme/GeneralTheme';
import { actions } from '../../store';
import { navigate } from '../../navigators/navigationService';
import { Text } from 'react-native-paper';
import Logo from '../elements/Logo/Logo';
import * as yup from 'yup'
import { Formik } from 'formik'
import { Alert } from 'react-native';

export const Login = (): JSX.Element => {
  

    return (
        <Formik
        initialValues={{ 
          accountCode: '',
          username: '', 
          password: '' 
        }}
        onSubmit= {values => {
            Alert.alert(JSON.stringify(values));
            navigate('OTP');
            console.log(values.accountCode);
            console.log(values.username);
            console.log(values.password);
          }}
        validationSchema={yup.object().shape({
          accountCode: yup
            .string()
            .required('Please, provide account code !'),
          username: yup
            .string()
            .required('Please, provide username!'),
          password: yup
            .string()
            .min(4)
            .max(10, 'Password should not excced 10 chars.')
            .required('Please provide password'),
        })}
       >
        {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
          <SafeAreaView style={styles.parentView}>
            <View>
                <Logo />
                {/* Account Code */}
                <View style={{ padding: 10}}>
                <TextInput
                    value={values.accountCode}
                    label="Acount Code"
                    placeholder="Enter Account Code"
                    onChangeText={handleChange('accountCode')}
                    onBlur={() => setFieldTouched('accountCode')}
                   
                />
                {touched.accountCode && errors.accountCode &&
              <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.accountCode}</Text>
            } 
                {/* User Name */}
                <TextInput
                    value={values.username}
                    label="User Name"
                    placeholder="Enter UserCode"
                    onChangeText={handleChange('username')}
                    onBlur={() => setFieldTouched('username')}
                />
                 {touched.username && errors.username &&
              <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.username}</Text>
            } 
                {/* Password */}
                <TextInput
                    value={values.password}
                    label="Password"
                    placeholder="Enter Password"
                    onChangeText={handleChange('password')}
                    onBlur={() => setFieldTouched('password')}
                />
                {touched.password && errors.password&&
              <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.password}</Text>
            } 
                
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
