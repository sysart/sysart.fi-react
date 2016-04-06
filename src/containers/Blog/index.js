import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import { Provider } from 'react-redux';
import configureStore from 'store/configureStore';


import { Footer } from 'components/Footer';
import { BlogListPage } from 'components/Pages/BlogList';


const metaData = {
  title: 'Sysart - Blogi',
  description: '',
  canonical: '',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: ''
    },
  },
};

const store = configureStore();

export class BlogList extends Component {
  render() {
    return (
      <section>
        <DocumentMeta {...metaData} />
        <BlogListPage />
        <Footer />
      </section>
    );
  }
}
