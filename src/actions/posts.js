import fetch from 'isomorphic-fetch';
import Q from 'q';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export function requestPosts(postType) {
    return {
        type: REQUEST_POSTS,
        postType
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

// get feature images
export function fetchPostsImages(postType, json) {
    return dispatch => {
        //dispatch(requestPosts(postType));

        console.log( 'Getting images', postType, json );

        let imagePromises = [];

        json.map((post, index) => {
            console.log('post', post);
            const { featured_media } = post;
            if(featured_media && featured_media !== 0){
                console.log('Get media ', featured_media);

                imagePromises.push(fetchPostImage(featured_media, index));
            }
        })

        Q.allSettled(imagePromises)
        .then( (results) => {


            results.forEach(function (result) {
                if (result.state === "fulfilled") {
                    json[result.value.index] = {
                        ...json[result.value.index],
                        featured_image: result.value.response
                    }
                }


            });
            console.log('Got all images', results);

            dispatch(receivePosts(postType, json))
        });

        
    }
}
export function fetchPostImage(id, index = 0) {
    const deferred = Q.defer();

    fetch('http://185.26.50.90/wp-json/wp/v2/media/' + id)
        .then(response => response.json())
        .then(json => deferred.resolve({
            index: index,
            response: json
        }))

    return deferred.promise;
}


// Inital postFetch
export function fetchPosts(postType) {
    return dispatch => {
        dispatch(requestPosts(postType));

        console.log('Getting data');

        return fetch('http://185.26.50.90/wp-json/wp/v2/posts')
            .then(response => response.json())
            .then(json => dispatch(fetchPostsImages(postType, json)))
    }
}
