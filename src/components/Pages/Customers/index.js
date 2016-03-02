import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from 'actions/customers';

// UI
import Meters from 'components/Meters';

import { TopImage } from 'components/TopImage';
import Contributors from 'components/Contributors';
import WpContent from 'components/WpContent';


import { styles } from './styles.scss';

/* Component */
@connect(
    state => ({
        customer: state.customers.single
    }),
    dispatch => bindActionCreators(actionCreators, dispatch)
)
export class SingleCustomerPage extends Component {

    constructor(props, context){
        super(props, context);

    }

    componentDidMount(){

    }

    componentWillMount(){
        console.log('componentWillMount', this);
        const { dispatch, fetchSingleCustomerPage } = this.props;

        const { customerName } = this.props.params;

        fetchSingleCustomerPage(customerName);
    }

    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps', nextProps);
    }

    render() {
        console.log('render customers ', this);


        let pageContent;

        if(this.props.customer.count() !== 0){


            const { customer } = this.props;
            const { customerName } = this.props.params;



            pageContent = customer.get(customerName);

            console.log('page content ', pageContent);

            const { content,
                    big_hero_text,
                    hero_image,
                    small_hero_text,
                    meters,
                    contributors
                } = pageContent;
            return (

                <section  className={`${styles}`}>
                    <TopImage
                        image={hero_image}
                        title={big_hero_text}
                        smallTitle={small_hero_text}
                    />

                    <Meters
                        meters={meters}
                        />
                    <WpContent content={content}/>
                    <Contributors contributors={contributors} />
                </section>

            );


        }else{
            return (
                <div>Loading</div>
            )
        }

    }
}
