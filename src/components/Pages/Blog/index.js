import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import * as actionCreators from 'actions/blog';


import { styles } from './styles';

import { TopImage } from 'components/TopImage';
import WpContent from 'components/WpContent';
import WpTitle from 'components/WpTitle';


/* Component */
@connect(
    state => state.blogs,
    dispatch => bindActionCreators(actionCreators, dispatch)
)
export class BlogPage extends Component {

    constructor(props, context){
        super(props, context);

    }

    componentWillMount(){
        console.log('emp list componentWillMount', this);
        const { dispatch, fetchBlogPage } = this.props;

        console.log('BLOG PAGE', this);

        fetchBlogPage(this.props.params.blogName);
    }

    render() {

        console.log('render', this);

        if(this.props.blogs[this.props.params.blogid] && this.props.blogs[this.props.params.blogid].content){
            const content = this.props.blogs[this.props.params.blogid].content;

            console.log('Got content for blog', content);

            return (
                <section className={styles}>

                    <TopImage
                        image={content.featured_image }
                        title={''}
                        smallTitle={''}
                        type="blogi"
                    />


                    <WpTitle title={content.title} published={content.publish_date}  />

                    <WpContent content={content.content} />


                </section>
            )
        }else{
            return (
                <div></div>
            )
        }




    }
}
