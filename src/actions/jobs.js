import fetch from 'isomorphic-fetch';
import { RestConfig } from 'config/rest';

// Inital postFetch
export function fetchJobList() {
    return dispatch => {
        return fetch(RestConfig.domain + 'wp-json/sysart-extend/v1/jobs')
            .then(response => response.json())
            .then(json => dispatch(receiveJobList(json)))
    }
}


export const RECEIVE_JOB_LIST = 'RECEIVE_JOB_LIST';
export function receiveJobList(json) {

    return {
        type: RECEIVE_JOB_LIST,
        jobs: json
    }
}
