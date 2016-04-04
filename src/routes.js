import React from 'react';
import { Route } from 'react-router';

/* containers */
import { App } from 'containers/App';
import { Home } from 'containers/Home';
import { List } from 'containers/List';
import { Customers } from 'containers/Customers';
import { CustomerPage } from 'containers/CustomerPage';
import { Employees } from 'containers/Employees';
import { Jobs } from 'containers/Jobs';
import { Contact } from 'containers/Contact';
import { BlogList } from 'containers/Blog';
import { Services } from 'containers/Services';


export default (
  <Route path="/" component={App}>
    <Route path="etusivu" component={Home} />
    <Route path="asiakkaat" component={Customers} />
    <Route path="asiakkaat/:customerName" component={CustomerPage} />
    <Route path="me" component={Employees} />
    <Route path="blogi" component={BlogList} />
    <Route path="blogi/:blogName" component={BlogList} />
    <Route path="tyopaikat" component={Jobs} />
    <Route path="yhteystiedot" component={Contact} />
    <Route path="palvelut" component={Services} />
    <Route status={404} path="*" component={Home} />
  </Route>
);
