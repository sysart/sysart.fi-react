import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import _ from 'lodash';

export default class PostItem extends Component {

    constructor(props, context){
        super(props, context);
    }

    render() {
        console.log('Rendder postImte', this);
        const { title, excerpt, featured_image, post_date, categories } = this.props.item;



        let postImage = '';
        let post_categories = '';
        if(featured_image){
            postImage = (
                <img src={featured_image} />
            )
        }

        if(categories) {
            categories.map((cat) => {
                console.log(' map cat ', cat);
                post_categories += cat.name + ' ';
            })
        }

        console.log('Post cat', post_categories);

        // Publish time

        let published
        if(post_date && !_.contains(this.props.hide, 'date')) {
            published = (
                <p className="published">
                    {post_date} - {post_categories}
                </p>
            )

        }


        return (
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 text-center">
                { published }
                <div className="image-wrapper">
                    {postImage}
                </div>
                <h4>
                    {title}
                </h4>
                <div>
                    <p className="excerpt">
                        {excerpt}
                    </p>
                </div>
            </div>
        )
    }
}
