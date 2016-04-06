import fetch from 'isomorphic-fetch';
import { RestConfig } from 'config/rest';

// Inital postFetch
export function fetchForm(id) {
    return dispatch => {
        console.log('Fetch form from ' + RestConfig.domain + 'wp-json/sysart-extend/v1/form/' + id);
        return fetch(RestConfig.domain + 'wp-json/sysart-extend/v1/form/' + id)
            .then(response => response.json())
            .then(json => dispatch(receiveJobList(json, id)))
    }
}


export const RECEIVE_FORM = 'RECEIVE_FORM';
export function receiveJobList(json, id) {

    return {
        type: RECEIVE_FORM,
        form: json,
        id: id
    }
}
