import {DOMAIN} from './fetchConfig'

let jwtToken;

export const setFetchToken = (token) => {
    jwtToken = token;
};
export const configuredRequest = (url = '/', method = 'GET', headers = {}, body) => {
    const configuredHeaders = jwtToken
        ? { ...headers, Authorization: jwtToken }
        : headers;

    return new Request(`${DOMAIN}${url}`, {
        method: method,
        headers: configuredHeaders,
        body: body && JSON.stringify(body),
    });
};

export const configuredFetch = (url = '/', method = 'GET', headers = {}, body) => {
    const configuredHeaders = jwtToken
        ? { ...headers, Authorization: jwtToken }
        : headers;

    return fetch(`${DOMAIN}${url}`, {
        method,
        headers: configuredHeaders,
        body: body && JSON.stringify(body),
    });
};
