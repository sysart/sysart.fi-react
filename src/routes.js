import React from 'react';
import { Route } from 'react-router';

/* containers */
import { App } from 'containers/App';
import { Home } from 'containers/Home';
import { List } from 'containers/List';
import { Customers } from 'containers/Customers';
import { CustomerPage } from 'containers/CustomerPage'; 

export default (
  <Route path="/" component={App}>
    <Route path="home" component={Home} />
    <Route path="asiakkaat" component={Customers} />
    <Route path="asiakkaat/:customerName" component={CustomerPage} />
    <Route path="list" component={List} />
    <Route status={404} path="*" component={Home} />
  </Route>
);
