import fetch from 'isomorphic-fetch';
import { RestConfig } from 'config/rest';

// get emp list
export function fetchContactPage() {
    return dispatch => {
        return fetch(RestConfig.domain + 'wp-json/sysart-extend/v1/contact')
            .then(response => response.json())
            .then(json => dispatch(receiveContactPage(json)))
    }
}


export const RECEIVE_CONTACT_PAGE = 'RECEIVE_CONTACT_PAGE';
export function receiveContactPage(json) {
    console.log('Got contact page ', json);
    return {
        type: RECEIVE_CONTACT_PAGE,
        content: json
    }
}
