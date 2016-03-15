import { OrderedMap } from 'immutable';

const INITIAL_STATE = {
    blogs : {}
};

export function blogs(state = INITIAL_STATE, action) {
    switch(action.type){
        case 'RECEIVE_BLOG_LIST':

            console.log('Getting bloglist', action, state);

            let updatedBlogs = {};

            action.blogItems.map((blog) => {

                let newBlog = {}
                newBlog[blog.id] = {
                    info: blog
                };

                updatedBlogs = Object.assign(
                    {},
                    updatedBlogs,
                    newBlog
                );

            });




            return {
                ...state,
                blogs: updatedBlogs
            };

        default:
            return state;
    }
}
