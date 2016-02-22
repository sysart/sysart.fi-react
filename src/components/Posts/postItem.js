import React, { Component, PropTypes } from 'react';

export default class PostItem extends Component {

    constructor(props, context){
        super(props, context);
    }

    render() {
        const { title, excerpt, featured_image } = this.props.item;
        console.log('PostItem', this.props);

        let postImage = '';
        if(featured_image){
            postImage = (
                <img src={featured_image.source_url} />
            )
        }

        return (
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 text-center">
                {postImage}
                <h4>
                    {title.rendered}
                </h4>
                <div dangerouslySetInnerHTML={{__html: excerpt.rendered}} />
            </div>
        )
    }
}
