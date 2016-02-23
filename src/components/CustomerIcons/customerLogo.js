import React, { Component, PropTypes } from 'react';
import moment from 'moment';

export class CustomerLogo extends Component {

    constructor(props, context){
        super(props, context);
    }

    render() {
        const { logo } = this.props.item;
        console.log('Customer logo', this.props);

        let postImage = '';

        return (
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 text-center">
                <img src={logo} />
            </div>
        )
    }
}
