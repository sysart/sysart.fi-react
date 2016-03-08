import { OrderedMap } from 'immutable';

const INITIAL_STATE = {
    blogs : OrderedMap({})
}

export function blogs(state = INITIAL_STATE, action) {
    switch(action.type){
        case 'RECEIVE_BLOG_LIST':



            action.blogItems.map((blog) => {
                state.blogs = state.blogs.setIn([blog.id, 'info'], blog)
                console.log(' b ==> ', blog);
            })


            return Object.assign({}, state, {
                blogs: state.blogs
            })

        default:
            return state;
    }
}
