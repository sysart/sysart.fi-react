import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from 'actions/services';

// UI

import { ServicePageItem } from 'components/Services/PageItem';

import { styles } from './styles.scss';

/* Component */
@connect(
    state => ({
        items: state.services.pageItems
    }),
    dispatch => bindActionCreators(actionCreators, dispatch)
)
export class ServicesPage extends Component {

    constructor(props, context){
        super(props, context);

    }

    componentDidMount(){

    }

    componentWillMount(){
        console.log('emp list componentWillMount', this);
        const { dispatch, fetchServicesPage } = this.props;

        fetchServicesPage();
    }

    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps', nextProps);
    }

    render() {
        console.log('render services page ', this);

        let items;
        if(this.props.items.length !== 0){
            items = this.props.items.map((item, index) => {
                let layout = 'even';
                if(index % 2){
                    layout = 'odd'
                }
                return (
                    <ServicePageItem layout={layout} item={item} key={index} />
                )
            })
        }
        
        return (
            <div className={styles}>
                {items}
            </div>
        )
    }
}
