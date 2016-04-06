import { Map } from 'immutable';

const INITIAL_STATE = {
    frontpage: {
        items : []
    },
    listpage: {
        items: []
    },
    single: Map({})

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
                        ...action.items
                    ]
                }
            })

        case 'RECEIVE_CUSTOMERS_PAGE':
            return Object.assign({}, state, {
                isFetching: false,
                listpage: {
                    items: [
                        ...action.items
                    ]
                }
            })

        case 'RECEIVE_SINGLE_CUSTOMERS_PAGE':

            // let singles = state.single;
            // singles[action.slug] = action.item.customer;

            //console.log('RECEIVE_SINGLE_CUSTOMERS_PAGE', state, action, singles);

            return Object.assign({}, state, {
                isFetching: false,
                single: state.single.set(action.slug, action.item)
            });


        default:
            return state;
    }
}
