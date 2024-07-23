import axios, { AxiosResponse } from "axios";

const API_URL = 'http://localhost:8080/api/contracts';

export const createContract = (clientId: string, quantity: number): Promise<AxiosResponse<any>> => {
    return axios.post(`${API_URL}/create`, null, {
        params: { clientId, quantity }
    });
};

export const getContractsByClientId = (clientId: string): Promise<AxiosResponse<any>> => {
    return axios.get(`${API_URL}/${clientId}`);
};