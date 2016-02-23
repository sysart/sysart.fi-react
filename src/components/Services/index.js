import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from 'actions/services';

import { ServiceItem } from './serviceItem';

import { styles } from './styles.scss';

@connect(
  state => state.services,
  dispatch => bindActionCreators(actionCreators, dispatch)
)
export class Services extends Component {

    constructor(props, context){
        super(props, context);
    }


    componentDidMount(){
        const { dispatch, fetchServices } = this.props;

        fetchServices();
    }

    render() {
        console.log('render services ', this);
        const { items } = this.props;

        if(items){
            return (

                <section className={`${styles}`}>
                  <div className="container">
                    <div className="row">
                        {items.map((item, index) => <ServiceItem key={index} item={item} />)}
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
