import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import { Provider } from 'react-redux';
import configureStore from 'store/configureStore';

/* components */


import { Footer } from 'components/Footer';
import { JobsPage } from 'components/Pages/Jobs';


const metaData = {
    title: 'Sysart - Työpaikat',
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

export class Jobs extends Component {
  render() {
      console.log('render jobs container ', this);
    return (
      <section>
        <DocumentMeta {...metaData} />
        <JobsPage />
        <Footer />
      </section>
    );
  }
}
