const INITIAL_STATE = {
    employeeList : []
}

export function employees(state = INITIAL_STATE, action) {
    switch(action.type){


        case 'RECEIVE_EMPLOYEE_LIST':
            console.log(state, action);

            const newEmpMap = state.employees

            return Object.assign({}, state, {
                employeeList: [...action.employees]
            })
        default:
            return state;
    }
}
