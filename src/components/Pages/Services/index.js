import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from 'actions/services';

// UI

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
            items = this.props.items.map((item) => {
                return (
                    <div>{item.title}</div>
                )
            })
        }


        return (
            <div className={styles}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1">
                            {items}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
