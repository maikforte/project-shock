import { API_BASE_URL, API_TOKEN } from 'react-native-dotenv';

const axios = require('axios');

const request = (requestType, endpoint, params, body) => {
    console.log({
        logType: 'REQUEST',
        requestType,
        endpoint,
        params,
        body,
    });

    return axios({
        url: `${API_BASE_URL}${endpoint}`,
        headers: {
            Authorization: `Bearer ${API_TOKEN}`,
            'Content-Type': 'application/json',
        },
        method: requestType,
        data: body,
        params,
    });
};

const get = (endpoint, params, body) => request('get', endpoint, params, body);

const post = (endpoint, params, body) => request('post', endpoint, params, body);

export const RequestService = {
    get,
    post,
};
