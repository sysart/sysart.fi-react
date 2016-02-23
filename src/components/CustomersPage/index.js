import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from 'actions/customers';

/* Component */
import { CustomerBox } from './customerBox';

import { styles } from './styles.scss';

@connect(
  state => state.customers.listpage,
  dispatch => bindActionCreators(actionCreators, dispatch)
)
export class CustomersPage extends Component {

    constructor(props, context){
        super(props, context);
    }


    componentDidMount(){
        const { dispatch, fetchCustomersPage } = this.props;

        fetchCustomersPage();
    }

    render() {
        console.log('render customers ', this);
        const { items } = this.props;

        if(items){
            return (

                <section  className={`${styles}`}>
                  <div className="container">
                    <div className="row">
                        {items.map((customer, index) => <CustomerBox item={customer} key={index} />)}
                    </div>

                  </div>
                </section>

            );
        }else{
            return (
                <div>Loading</div>
            )
        }

    }
}
