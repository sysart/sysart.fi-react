import fetch from 'isomorphic-fetch';
import { RestConfig } from 'config/rest';

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

        console.log('Getting data', RestConfig);

        return fetch(RestConfig.domain + '/wp-json/sysart-extend/v1/frontpage-posts')
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
