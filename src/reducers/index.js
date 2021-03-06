import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import { reducer as formReducer } from 'redux-form';

import { items } from './items';
import { posts } from './posts';
import { services } from './services';
import { customers } from './customers';
import { employees } from './employees';
import { blogs } from './blog';
import { jobs } from './job';
import { contactPage } from './contact';
import { forms } from './form';
import { frontpage } from './frontpage';


const rootReducer = combineReducers({
    form: formReducer,
    routing: routeReducer,
    /* your reducers */
    employees,
    blogs,
    posts,
    items,
    services,
    customers,
    jobs,
    contactPage,
    forms,
    frontpage
});

export default rootReducer;
