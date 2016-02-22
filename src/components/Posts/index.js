import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from 'actions/posts';

@connect((state, props) => {
    return {};
})
export class Posts extends Component {
    testi() {
        this.props.dispatch(fetchPosts('test'));
    }

    render() {
        return (
            <button onClick={this.testi.bind(this)}>PÖÖP</button>
        );
    }
}
