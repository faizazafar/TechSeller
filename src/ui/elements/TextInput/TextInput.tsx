import React from 'react';
import { TextInput as TextInputField } from 'react-native-paper';
import { ITextInput } from '../../../types';
import { style } from './TextInput.styles';

export const TextInput = ({
    label,
    placeholder,
    secureTextEntry,
    value,
    onChangeText,
    onBlur
}: ITextInput): JSX.Element => {
    return (
        <TextInputField
            style={[style.textInput , style.UniversNextArabicRegular]}
            label={placeholder}
            secureTextEntry={secureTextEntry}
            value={value}
            outlineColor="black"
            activeOutlineColor="black"
            mode="outlined"
            onChangeText={(text: string) => {
                onChangeText(text);
            }}
            
        />
    );
};
