import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from 'actions/posts';

import PostItem from './postItem';
import { styles } from './styles.scss';


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

    onClick = () => {

    }

    render() {
        const { items } = this.props;
        return (

            <section className={`${styles}`}>
              <div className="container">
                <div className="row">
                    <h1>Ajankohtaista</h1>
                </div>
                <div className="row">
                    {items.map((postItem, index) => <PostItem onClick={this.onClick} key={index} item={postItem} />)}
                </div>
              </div>
            </section>

        );
    }
}
