import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from 'actions/contact';

// UI

import { TopImage } from 'components/TopImage';
import Employee from 'components/Employee';
import { styles } from './styles.scss';

/* Component */
@connect(
    state => ({
        content: state.contactPage.contactPage
    }),
    dispatch => bindActionCreators(actionCreators, dispatch)
)
export class ContactPage extends Component {

    constructor(props, context){
        super(props, context);

    }

    componentDidMount(){

    }

    componentWillMount(){
        console.log('contact componentWillMount', this);
        const { dispatch, fetchContactPage } = this.props;

        fetchContactPage();
    }

    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps', nextProps);
    }

    render() {
        console.log('render contact page ', this);

        const { content } = this.props;

        if(Object.keys(content).length !== 0){
            const { locations, persons } = content;

            return (
                <div className={styles}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 col-md-offset-1">
                                <div className="row location-row">
                                    {
                                    locations.map((location, index) => {
                                        console.log('location', location);
                                        return (
                                            <div key={index} className="col-md-4 location-container">
                                                <img className="location-icon" src={location.icon} />
                                                <h3>{location.name}</h3>
                                                <p>{location.address}</p>
                                            </div>
                                        )
                                    })
                                }
                                </div>

                                <div className="row person-row">
                                    {
                                        persons.map((person, index) => {
                                            console.log('persons', person);
                                            return (
                                                <div key={index} className="col-sm-4">
                                                    <Employee employee={person} layout="vertical" />
                                                </div>
                                            )
                                        })
                                    }
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            )
        }else{
            return false;
        }


    }
}
