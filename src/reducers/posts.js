const INITIAL_STATE = {}

export function posts(state = INITIAL_STATE, action) {
    switch(action.type){
        case 'REQUEST_POSTS':
            return Object.assign({}, state, {
                isFetching: true
            })
        default:
            return state;
    }
}
