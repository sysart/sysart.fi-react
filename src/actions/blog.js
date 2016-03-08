import fetch from 'isomorphic-fetch';
import { RestConfig } from 'config/rest';

// Inital postFetch
export function fetchBlogList() {
    return dispatch => {
        return fetch(RestConfig.domain + 'wp-json/sysart-extend/v1/blog')
            .then(response => response.json())
            .then(json => dispatch(receiveBlogList(json)))
    }
}


export const RECEIVE_BLOG_LIST = 'RECEIVE_BLOG_LIST';
export function receiveBlogList(json) {

    return {
        type: RECEIVE_BLOG_LIST,
        blogItems: json
    }
}
