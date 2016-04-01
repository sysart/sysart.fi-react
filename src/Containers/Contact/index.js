import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import { Provider } from 'react-redux';
import configureStore from 'store/configureStore';

/* components */
import { TopImage } from 'components/TopImage';

import { Footer } from 'components/Footer';
import { ContactPage } from 'components/Pages/Contact';

const metaData = {
    title: 'Sysart - Yhteystiedot',
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
