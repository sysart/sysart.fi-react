import { OrderedMap } from 'immutable';

const INITIAL_STATE = {
    jobItems : [],
    jobPage : {}
};

export function jobs(state = INITIAL_STATE, action) {
    switch(action.type){
        case 'RECEIVE_JOB_LIST':

            console.log('Got them jobs', action);


            return Object.assign(
                {},
                state,
                {
                    jobItems: [
                        ...action.jobs.job_list
                    ],
                    jobPage :action.jobs.page_content
                }
            );

        default:
            return state;
    }
}
