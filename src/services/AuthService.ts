import { ILoginPayload, ILoginResponse } from '../types';
import ApiClient from './ApiClient';
import { useQuery } from 'react-query';

const login = async (payload: ILoginPayload): Promise<ILoginResponse> => {
    const response = await ApiClient.get(`todos`, {
        data: { ...payload },
    });
    return response.data;
};

export const useLoginQuery = (payload: ILoginPayload) => {
    return useQuery(['login', payload], () => login(payload), {
        enabled: false,
    });
};
