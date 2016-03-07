import fetch from 'isomorphic-fetch';
import { RestConfig } from 'config/rest';

export const REQUEST_CUSTOMERS = 'REQUEST_CUSTOMERS';
export function requestCustomers(postType) {
    return {
        type: REQUEST_CUSTOMERS,
        postType
    }
}


// Inital postFetch
export function fetchCustomers(postType) {
    return dispatch => {
        dispatch(requestCustomers(postType));

        console.log('Getting data customers');

        return fetch(RestConfig.domain + 'wp-json/sysart-extend/v1/frontpage-customers')
            .then(response => response.json())
            .then(json => dispatch(receiveCustomers(postType, json)))
    }
}


export const RECEIVE_CUSTOMERS = 'RECEIVE_CUSTOMERS';
export function receiveCustomers(postType, json) {
    console.log('receive posttype', postType, json);
    return {
        type: RECEIVE_CUSTOMERS,
        postType,
        items: json
    }
}

// Get customers page
export function fetchCustomersPage(postType) {
    return dispatch => {

        return fetch(RestConfig.domain + 'wp-json/sysart-extend/v1/customers-list')
            .then(response => response.json())
            .then(json => dispatch(receiveCustomersPage(postType, json)))
    }
}

export const RECEIVE_CUSTOMERS_PAGE = 'RECEIVE_CUSTOMERS_PAGE';
export function receiveCustomersPage(postType, json) {

    return {
        type: RECEIVE_CUSTOMERS_PAGE,
        postType,
        items: json
    }
}

// Get single customer page
export function fetchSingleCustomerPage(slug) {
    return dispatch => {
        dispatch(requestCustomers(''));

        console.log('Getting', 'http://185.26.50.90/wp-json/sysart-extend/v1/customer/' + slug);

        return fetch(RestConfig.domain + 'wp-json/sysart-extend/v1/customer/' + slug)
            .then(response => response.json())
            .then(json => dispatch(receiveSingleCustomerPage(slug, json)))
    }
}

export const RECEIVE_SINGLE_CUSTOMERS_PAGE = 'RECEIVE_SINGLE_CUSTOMERS_PAGE';
export function receiveSingleCustomerPage(slug, json) {

    return {
        type: RECEIVE_SINGLE_CUSTOMERS_PAGE,
        slug,
        item: json
    }
}
