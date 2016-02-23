import fetch from 'isomorphic-fetch';

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

        return fetch('http://185.26.50.90/wp-json/sysart-extend/v1/frontpage-customers')
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

        return fetch('http://185.26.50.90/wp-json/sysart-extend/v1/customers-list')
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