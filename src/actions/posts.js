import fetch from 'isomorphic-fetch';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export function requestPosts(postType) {
    return {
        type: REQUEST_POSTS,
        postType
    }
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export function receivePosts(postType, json) {
    return {
        type: RECEIVE_POSTS,
        postType,
        posts: json,
        receivedAt: Date.now()
    }
}

export function fetchPosts(postType) {
    return dispatch => {
        dispatch(requestPosts(postType));

        return fetch('http://185.26.50.90/wp-json/wp/v2/posts')
            .then(response => response.json())
            .then(json => dispatch(receivePosts(postType, json)))
    }
}
