import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from 'actions/blog';

import PostItem from 'components/Posts/postItem';

import { styles } from './styles';

import { browserHistory } from 'react-router'



/* Component */
@connect(
    state => state.blogs,
    dispatch => bindActionCreators(actionCreators, dispatch)
)
export class BlogListPage extends Component {

    
    constructor(props, context){
        super(props, context);

    }

    componentDidMount(){

    }

    componentWillMount(){
        console.log('emp list componentWillMount', this);
        const { dispatch, fetchBlogList } = this.props;

        fetchBlogList();
    }

    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps', nextProps);
    }
    
    render() {
        console.log('render blog list page ', this);
        console.log('Got these blogs ', this.props.blogs);

        const { blogs } = this.props;


        console.log('Blogs in JS', blogs);

        return (
            <div className={styles}>
                <div className="container">
    				<div className="row">
    					<div className="col-md-10 col-md-offset-1">


                            {
                                Object.keys(blogs).map((blogId, index) => {
                                    let postItem = blogs[blogId].info;

                                    return (
                                        <PostItem 
                                            key={index}
                                            hide={['date','categories']} 
                                            item={postItem} 
                                            
                                        />
                                    )
                                })
                            }

    					</div>
    				</div>
    			</div>
            </div>
        )


    }
}
