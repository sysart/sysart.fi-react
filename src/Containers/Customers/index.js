import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import { Provider } from 'react-redux';
import configureStore from 'store/configureStore';

/* components */

import { CustomersPage } from 'components/CustomersPage';

const metaData = {
    title: 'Sysart - Asiakkaat',
    description: '',
    canonical: '',
    meta: {
        charset: 'utf-8',
        name: {
            keywords: '',
        },
    },
};

const store = configureStore();

export class Customers extends Component {
  render() {
      console.log('render customers ', this);
    return (
      <section>
        <DocumentMeta {...metaData} />
        <CustomersPage />
      </section>
    );
  }
}
