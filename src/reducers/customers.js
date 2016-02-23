const INITIAL_STATE = {
    items : []
}

export function customers(state = INITIAL_STATE, action) {
    switch(action.type){
        case 'REQUEST_CUSTOMERS':
            return Object.assign({}, state, {
                isFetching: true
            })

        case 'RECEIVE_CUSTOMERS':
            console.log(state, action);
            return Object.assign({}, state, {
                isFetching: false,
                items: [
                    ...action.items.customers
                ]
            })
        default:
            return state;
    }
}
