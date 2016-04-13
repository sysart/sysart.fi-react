import React, {Component} from 'react';
import DocumentMeta from 'react-document-meta';
import {Provider} from 'react-redux';
import configureStore from 'store/configureStore';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

/* components */
import {TopImage} from 'components/TopImage';

import {Projects} from 'components/Projects';
import {Posts} from 'components/Posts';
import {Services} from 'components/Services';
import {CustomerIcons} from 'components/CustomerIcons';
import {Footer} from 'components/Footer';

import {Form} from 'components/Form';

// action creators
import * as actionCreators from 'actions/loader';

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

@connect(
    state => state.frontpage,
    dispatch => bindActionCreators(actionCreators, dispatch)
)
export class Home extends Component {

    constructor(props, context){
        super(props, context);

    }

    componentWillMount(){
        const { dispatch, loadFromApi } = this.props;

        loadFromApi('/frontpage', 'RES_FRONTPAGE_SETTINGS');
    }


    render() {
        console.log('render home', this);
        return (
            <section>
                <DocumentMeta {...metaData} />
                <TopImage
                    cta={this.props.cta}
                    title={'Ei tarttuvaa slogania, vaan hyvää ohjelmistokehitystä'}
                    />
                <Services />
                <Form formid={1} />
                <Posts />
                <CustomerIcons />
                <Footer />
            </section>
        );
    }
}
