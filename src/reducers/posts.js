const INITIAL_STATE = {
    items : []
}

export function posts(state = INITIAL_STATE, action) {
    switch(action.type){
        case 'REQUEST_POSTS':
            return Object.assign({}, state, {
                isFetching: true
            })

        case 'RECEIVE_POSTS':
            console.log(state, action);
            return Object.assign({}, state, {
                isFetching: false,
                items: [
                    ...action.items
                ]
            })
        default:
            return state;
    }
}
