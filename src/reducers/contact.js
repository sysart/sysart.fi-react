const INITIAL_STATE = {
    contactPage : {}
};

export function contactPage(state = INITIAL_STATE, action) {
    switch(action.type){

        case 'RECEIVE_CONTACT_PAGE':
            console.log(state, action);

            return Object.assign({}, state, {
                contactPage: action.content
            });
        default:
            return state;
    }
}
