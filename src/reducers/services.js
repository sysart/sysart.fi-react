const INITIAL_STATE = {
    services : [],
    pageItems: []
};

export function services(state = INITIAL_STATE, action) {
    switch(action.type){
        case 'REQUEST_SERVICES':
            return Object.assign({}, state, {
                isFetching: true
            });

        case 'RECEIVE_SERVICES':
            console.log('res resvices', state, action);
            return Object.assign({}, state, {
                isFetching: false,
                services: [
                    ...action.items
                ]
            });

        case 'RECEIVE_SERVICES_PAGE':
            //RECEIVE_SERVICES_PAGE
            console.log('res services page', state, action);
            return Object.assign({}, state, {
                isFetching: false,
                pageItems: [
                    ...action.items
                ]
            });


        default:
            return state;
    }
}
