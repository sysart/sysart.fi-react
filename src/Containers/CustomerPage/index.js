import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import { Provider } from 'react-redux';
import configureStore from 'store/configureStore';

/* components */
import { TopImage } from 'components/TopImage';
import { SingleCustomerPage } from 'components/Pages/Customers';
import { Footer } from 'components/Footer';

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

export class CustomerPage extends Component {
  render() {
      console.log('render single customer container ', this);
    return (
      <section>
        <DocumentMeta {...metaData} />
        <SingleCustomerPage {...this.props} />
        <Footer />
      </section>
    );
  }
}
