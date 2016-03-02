import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import { Link } from 'react-router';


export class CustomerBox extends Component {

    constructor(props, context){
        super(props, context);
    }

    render() {
        const { title, image, description, slug } = this.props.item;
        console.log('CustomerBox', this.props);

        let postImage = '';

        return (
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 text-center">
                <Link to={'/asiakkaat/' + slug} activeClassName="active">
                    <img src={image} />
                    <h2>{title}</h2>
                    <div dangerouslySetInnerHTML={{__html: description}} />
                </Link>

            </div>
        )
    }
}
