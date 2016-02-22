import React, { Component } from 'react';
import { fetchPosts } from 'actions/posts';


export class Posts extends Component {
    constructor(props){
        super(props)
        this.fetchPosts = this.fetchPosts.bind(this);
    }

    componentDidMount() {
        console.log('tissi: ',this);
    }

    fetchPosts() {
        let postType = 'test';

        const { dispatch } = this.props;
        dispatch(fetchPosts(postType));
    }

    render() {
        return (
            <button onClick={this.fetchPosts()}></button>
        )
    }
}
