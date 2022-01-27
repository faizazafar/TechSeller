import React from 'react';
import { Button } from 'react-native-paper';
import { IImageModes, ISubmitButton } from '../../../types';
import { style } from './SubmitButton.styles';

export const SubmitButton = ({
    icon,
    mode,
    title,
    onPress,
}: ISubmitButton): JSX.Element => {
    return (
        <Button
            style={style.submitButton}
            icon={icon ? icon : undefined}
            // mode={mode ? mode : IImageModes.contained}
            onPress={() => {
                onPress();
            }}
            
        >
            {title}
        </Button>
    );
};
