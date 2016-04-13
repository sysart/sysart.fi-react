import fetch from 'isomorphic-fetch';
import { RestConfig } from 'config/rest';

// Inital What ever...
export function loadFromApi(req, target) {
    return dispatch => {
        return fetch(RestConfig.url + req)
            .then(response => response.json())
            .then(json => dispatch(receiveDataFromApi(json, target)))
    }
}

export function receiveDataFromApi(json, target) {
    return {
        type: target,
        ...json
    }
}
