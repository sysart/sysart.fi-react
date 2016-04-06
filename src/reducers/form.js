import { Map } from 'immutable';

const INITIAL_STATE = {
    forms : Map({})
};

export function forms(state = INITIAL_STATE, action) {
    switch(action.type){
        case 'RECEIVE_FORM':

            return {
                ...state,
                forms: state.forms.set(action.id, action.form)
            };

        default:
            return state;
    }
}
