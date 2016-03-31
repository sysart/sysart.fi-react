import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import { Provider } from 'react-redux';
import configureStore from 'store/configureStore';

/* components */
import { TopImage } from 'components/TopImage';

import { Projects } from 'components/Projects';
import { Posts } from 'components/Posts';
import { Services } from 'components/Services';
import { CustomerIcons } from 'components/CustomerIcons';
import { Footer } from 'components/Footer';

const metaData = {
    title: 'Sysart',
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

export class Home extends Component {

  render() {
      console.log('render home', this);
    return (
      <section>
        <DocumentMeta {...metaData} />
        <TopImage title={'Ei tarttuvaa slogania, vaan hyvää ohjelmistokehitystä'} />
        <Services />
        <Posts />
        <CustomerIcons />
        <Footer />
      </section>
    );
  }
}
