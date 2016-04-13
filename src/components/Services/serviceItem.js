import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import { Link } from 'react-router';

export class ServiceItem extends Component {

    constructor(props, context){
        super(props, context);
    }

    render() {
        const { title, image, description } = this.props.item;
        console.log('ServiceItem', this.props);

        let postImage = '';

        return (
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 text-center service-item">
                <Link to="/palvelut" activeClassName="active">
                    <div className="image-wrapper">
                        <img src={image} />
                    </div>
                    <h4>{title}</h4>
                    <div dangerouslySetInnerHTML={{__html: description}} />
                </Link>
            </div>
        )
    }
}
