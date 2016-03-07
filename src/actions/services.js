import fetch from 'isomorphic-fetch';
import { RestConfig } from 'config/rest';

export const REQUEST_SERVICES = 'REQUEST_SERVICES';
export function requestServices(postType) {
    return {
        type: REQUEST_SERVICES,
        postType
    }
}


// Inital postFetch
export function fetchServices(postType) {
    return dispatch => {
        dispatch(requestServices(postType));

        console.log('Getting data');

        return fetch(RestConfig.domain + 'wp-json/sysart-extend/v1/frontpage-services')
            .then(response => response.json())
            .then(json => dispatch(receiveServices(postType, json)))
    }
}


export const RECEIVE_SERVICES = 'RECEIVE_SERVICES';
export function receiveServices(postType, json) {
    console.log('receive posttype', postType, json);
    return {
        type: RECEIVE_SERVICES,
        postType,
        items: json
    }
}
