import { proxy, useSnapshot } from 'valtio';
import { IAppState, IAuth, ILanguage } from '../types';

export const store = proxy<IAppState>({
    auth: {
        isLogin: false,
    },
    lang: {
        selected: 'en',
        languages: [],
    },
});

export const actions = {
    getAuthState() {
        const snapShot = useSnapshot(store);
        return snapShot.auth;
    },
    getLangState() {
        const snapShot = useSnapshot(store);
        return snapShot.lang;
    },
    setAuthState(auth: IAuth) {
        store.auth = auth;
    },
    setLangState(lang: ILanguage) {
        store.lang = lang;
    },
    setIsLoggedIn(isLoggedIn: boolean) {
        store.auth.isLogin = isLoggedIn;
    },
};
