const INITIAL_STATE = {
    frontpage: {
        items : []
    },
    listpage: {
        items: []
    }

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
                frontpage: {
                    items: [
                        ...action.items.customers
                    ]
                }
            })

        case 'RECEIVE_CUSTOMERS_PAGE':
            return Object.assign({}, state, {
                isFetching: false,
                listpage: {
                    items: [
                        ...action.items.customers
                    ]
                }
            })
        default:
            return state;
    }
}
