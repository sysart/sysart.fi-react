import { OrderedMap, Map } from 'immutable';

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
                    ...state.blogs[blog.id],
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
        case 'RECEIVE_BLOG_PAGE':

            const {blog} = action;

            let newItem = {};
            newItem[blog.id] = {
                ...state.blogs[blog.id],
                content: blog
            };

            let updated = Object.assign(
                {},
                state.blogs,
                newItem
            );

            return {
                ...state,
                blogs: updated
            };

        default:
            return state;
    }
}
