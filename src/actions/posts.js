import fetch from 'isomorphic-fetch';
import Q from 'q';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export function requestPosts(postType) {
    return {
        type: REQUEST_POSTS,
        postType
    }
}


// Inital postFetch
export function fetchPosts(postType) {
    return dispatch => {
        dispatch(requestPosts(postType));

        console.log('Getting data');

        return fetch('http://185.26.50.90/wp-json/sysart-extend/v1/frontpage-posts')
            .then(response => response.json())
            .then(json => dispatch(receivePosts(postType, json)))
    }
}


export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export function receivePosts(postType, json) {
    console.log('receive posttype', postType, json);
    return {
        type: RECEIVE_POSTS,
        postType,
        items: json
    }
}
