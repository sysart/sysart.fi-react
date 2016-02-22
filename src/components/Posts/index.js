import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from 'actions/posts';

import PostItem from './postItem';

@connect(
  state => state.posts,
  dispatch => bindActionCreators(actionCreators, dispatch)
)
export class Posts extends Component {

    constructor(props, context){
        super(props, context);
    }


    componentDidMount(){
        const { dispatch, fetchPosts } = this.props;

        fetchPosts();
    }

    render() {
        const { items } = this.props;
        return (

            <section>
              <div className="container">
                <div className="row">
                    {items.map((postItem, index) => <PostItem key={index} item={postItem} />)}
                </div>
              </div>
            </section>

        );
    }
}
