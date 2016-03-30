import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import { Provider } from 'react-redux';
import configureStore from 'store/configureStore';

/* components */
import { TopImage } from 'components/TopImage';

import { Footer } from 'components/Footer';
import { ContactPage } from 'components/Pages/Contact';

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

export class Contact extends Component {
    render() {
        console.log('render single customer container ', this);
        return (
            <section>
                <DocumentMeta {...metaData} />
                <ContactPage />
                <Footer />
            </section>
        );
    }
}
