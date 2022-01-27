export interface IAppState {
    auth: IAuth;
    lang: ILanguage;
}

export interface IAuth {
    isLogin: boolean;
}

export interface ILanguage {
    selected: string;
    languages?: string[]
}

export enum IImageModes {
    'text',
    'outlined',
    'contained',
    undefined,
}

export interface ISubmitButton {
    icon?: string;
    mode?: IImageModes;
    title: string;
    onPress(): void;
}

export interface ITextInput {
    label?: string;
    value?: string;
    secureTextEntry?: boolean;
    placeholder: string;
    onChangeText(text: string): void;
    onBlur?(text: string): void;
}

export interface ILoginPayload {
    username: string;
    password: string;
}

export interface ILoginResponse {
    username: string;
    password: string;
}
