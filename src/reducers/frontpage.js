import { Map } from 'immutable';

const INITIAL_STATE = {
    cta : {},
    hero: {}
};

export function frontpage(state = INITIAL_STATE, action) {
    switch(action.type){
        case 'RES_FRONTPAGE_SETTINGS':

            return {
                ...state,
                cta: action.cta,
                hero: action.hero
            };

        default:
            return state;
    }
}
