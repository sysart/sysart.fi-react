import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import { Provider } from 'react-redux';
import configureStore from 'store/configureStore';

/* components */


import { Footer } from 'components/Footer';
import { JobsPage } from 'components/Pages/Jobs';


const metaData = {
  title: 'Redux Easy Boilerplate',
  description: 'Start you project easy and fast with modern tools',
  canonical: 'http://example.com/path/to/page',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'react,meta,document,html,tags',
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
