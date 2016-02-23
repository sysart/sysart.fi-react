const INITIAL_STATE = {
    services : []
}

export function services(state = INITIAL_STATE, action) {
    switch(action.type){
        case 'REQUEST_SERVICES':
            return Object.assign({}, state, {
                isFetching: true
            })

        case 'RECEIVE_SERVICES':
            console.log('res resvices', state, action);
            return Object.assign({}, state, {
                isFetching: false,
                items: [
                    ...action.items.services
                ]
            })
        default:
            return state;
    }
}
