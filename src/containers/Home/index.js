import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import { Provider } from 'react-redux';
import configureStore from 'store/configureStore';

/* components */
import { TopImage } from 'components/TopImage';
import { Tools } from 'components/Tools';
import { Projects } from 'components/Projects';
import { Posts } from 'components/Posts';
import { Services } from 'components/Services'

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

export class Home extends Component {
  render() {
    return (
      <section>
        <DocumentMeta {...metaData} />
        <TopImage />
        <Services />
        <Posts />
      </section>
    );
  }
}
