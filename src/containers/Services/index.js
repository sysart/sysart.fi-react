import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import { Provider } from 'react-redux';
import configureStore from 'store/configureStore';

/* components */


import { Footer } from 'components/Footer';
import { ServicesPage } from 'components/Pages/Services';


const metaData = {
    title: 'Sysart - Palvelut',
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

export class Services extends Component {
    render() {
        console.log('render services container ', this);
        return (
            <section>
                <DocumentMeta {...metaData} />
                <ServicesPage />
                <Footer />
            </section>
        );
    }
}
