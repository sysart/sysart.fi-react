import React, { Component, PropTypes } from 'react';
import moment from 'moment';

export class ServiceItem extends Component {

    constructor(props, context){
        super(props, context);
    }

    render() {
        const { title, image, description } = this.props.item;
        console.log('ServiceItem', this.props);

        let postImage = '';

        return (
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 text-center">

                <h4>
                    {title}
                </h4>
                <img src={image} />
                <div dangerouslySetInnerHTML={{__html: description}} />

            </div>
        )
    }
}
