import React, { Component, PropTypes } from 'react';
import moment from 'moment';

export default class PostItem extends Component {

    constructor(props, context){
        super(props, context);
    }

    render() {
        const { post_title, post_excerpt, featured_image, post_date, post_categories } = this.props.item;
        console.log('PostItem', this.props);

        let postImage = '';
        let categories = '';
        if(featured_image){
            postImage = (
                <img src={featured_image} />
            )
        }

        if(post_categories) {
            post_categories.map((cat) => {
                categories += cat.name + ' ';
            })
        }

        // Publish time
        let published = moment(post_date).format('DD.MM.YYYY')

        return (
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 text-center">
                <p className="published">
                    {published} - {categories}
                </p>
                <div className="image-wrapper">
                    {postImage}
                </div>
                <h4>
                    {post_title}
                </h4>
                <div>
                    <p className="excerpt">
                        {post_excerpt}
                    </p>
                </div>
            </div>
        )
    }
}
