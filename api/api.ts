import axios, { AxiosResponse } from 'axios';

const schemeName = 'OPTIE1';

const baseURL = "http://10.50.13.2:8081/spring/";
// const baseURL = "https://uatchs2.ewmgroup.com/chs2/";

const instance = axios.create({
    baseURL: baseURL
});

const responseBody = (response: AxiosResponse) => response.data;
const responseHeaders = (response: AxiosResponse) => response.headers;
const responseFull = (response: AxiosResponse) => response;

const requests = {
    get: (url: string, headers) => instance.get(url, headers).then(responseFull),
    post: (url: string, body: {}, headers) => instance.post(url, body, headers).then(responseFull),
    put: (url: string, body: {}, headers) => instance.put(url, body, headers).then(responseFull),
    delete: (url: string, headers) => instance.delete(url, headers).then(responseFull)
}

const loginRequests = {
    post: (url: string, body: {}, headers: {}) => instance.post(url, body, headers).then(responseFull),
}

export const Auth = {
    login: (data: any): Promise<any> => loginRequests.post(`2factor/login/${schemeName}`, data, {'Content-Type': 'application/json'}),
    verifyCode: (code: any): Promise<any> => loginRequests.post(`2factor/verify/${schemeName}`, code, {'Content-Type': 'application/json'}),
    refreshToken: (token: any): Promise<any> => requests.get(`refresh/token`, Object.assign(instance.defaults, {headers: {authorization: token}}))
}

export const Claim = {
    claimAdd: (token,data: any): Promise<any> => requests.post(`add/claim/${schemeName}`, data, Object.assign(instance.defaults, {headers: {authorization: token}})),
    claimSubTypeList: (token, id): Promise<any> => requests.get(`/damage/subtype/${schemeName}/${id}`, Object.assign(instance.defaults, {headers: {authorization: token}})),
    claimTypeList: (token): Promise<any> => requests.get(`claim/type/list`, Object.assign(instance.defaults, {headers: {authorization: token}})),
    claimList: (token, data): Promise<any> => requests.post(`claim/list/filter/${schemeName}`, data, Object.assign(instance.defaults, {headers: {authorization: token}})),
    autoDecision: (token, data): Promise<any> => requests.post(`autodecision/decide`, data, Object.assign(instance.defaults, {headers: {authorization: token}}))
}

export const User = {
    userUpdate: (token, data): Promise<any> => requests.post(`contract/address/update/${schemeName}`, data, Object.assign(instance.defaults, {headers: {authorization: token}}))
}
