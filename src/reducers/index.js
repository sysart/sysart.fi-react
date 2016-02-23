import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import { reducer as formReducer } from 'redux-form';

import { items } from './items';
import { posts } from './posts';
import { services } from './services';
import { customers } from './customers';

const rootReducer = combineReducers({
  form: formReducer,
  routing: routeReducer,
  /* your reducers */
  posts,
  items,
  services,
  customers
});

export default rootReducer;
