import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import _ from 'lodash';

import { styles } from './styles.scss';

import WpContent from 'components/WpContent';

export default class SingleJob extends Component {

    constructor(props, context){
        super(props, context);

        this.state = {
            showDescription: false
        }
    }


    toggleDescription = () => {
        this.setState({
            showDescription: !this.state.showDescription
        });
    };


    render() {
        console.log('Rendder single job', this);

        const { title, description } = this.props.item;

        let descriptionClass = "row job-description";

        if(this.state.showDescription){
            descriptionClass += " visible";
        }


        return (
            <div className={styles}>

                    <div className="col-xs-12">
                        <div className="row job-title">
                            <div className="col-xs-12">
                                <h2 onClick={this.toggleDescription}>
                                    {title}
                                </h2>
                            </div>
                        </div>
                        <div className={descriptionClass}>
                            <div className="col-xs-12">
                                <div dangerouslySetInnerHTML={{__html:description}}></div>
                            </div>
                        </div>

                </div>


            </div>
        )
    }
}
