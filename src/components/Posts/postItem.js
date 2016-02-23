import React, { Component, PropTypes } from 'react';
import moment from 'moment';

export default class PostItem extends Component {

    constructor(props, context){
        super(props, context);
    }

    render() {
        const { post_title, post_excerpt, featured_image, post_date } = this.props.item;
        console.log('PostItem', this.props);

        let postImage = '';
        if(featured_image){
            postImage = (
                <img src={featured_image} />
            )
        }

        // Publish time
        let published = moment(post_date).format('DD.MM.YYYY')

        return (
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 text-center">
                <div>
                    {published}
                </div>
                {postImage}
                <h4>
                    {post_title}
                </h4>
                <div dangerouslySetInnerHTML={{__html: post_excerpt}} />
            </div>
        )
    }
}
