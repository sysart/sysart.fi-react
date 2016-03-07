import fetch from 'isomorphic-fetch';
import { RestConfig } from 'config/rest';

// get emp list
export function fetchEmployeeList() {
    return dispatch => {
        return fetch(RestConfig.domain + 'wp-json/sysart-extend/v1/employees')
            .then(response => response.json())
            .then(json => dispatch(receiveEmployeeList(json)))
    }
}


export const RECEIVE_EMPLOYEE_LIST = 'RECEIVE_EMPLOYEE_LIST';
export function receiveEmployeeList(json) {

    return {
        type: RECEIVE_EMPLOYEE_LIST,
        employees: json.employees
    }
}
