import * as React from 'react';
import { RefObject } from 'react';
import {
    CommonActions,
    NavigationContainerRef,
} from '@react-navigation/native';
export let navigationRef:
    | NavigationContainerRef<ReactNavigation.RootParamList>
    | null
    | undefined
    | RefObject<unknown> = React.createRef();

export const setTopLevelNavigator = (
    navigatorRef: NavigationContainerRef<ReactNavigation.RootParamList> | null
) => {
    navigationRef = navigatorRef;
};

export const getTopLevelNavigator = () => {
    return navigationRef;
};

export function navigate(name: string, params?: Record<string, unknown>) {
    navigationRef?.dispatch(CommonActions.navigate(name, params));
}

export function goBack(): void {
    navigationRef?.dispatch(CommonActions.goBack());
}
