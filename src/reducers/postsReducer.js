import postService from '../services/post';

function postsReducer(state = [], action) {
    switch (action.type) {
        case 'INIT_POSTS':
            return action.data;

        case 'CREATE_POST':
            return [...state, action.data];

        case 'REMOVE_POST':
            return state.filter(p => p.id !== action.data.id);

        default:
            return state;
    }
}

// Actions

export function postsInit() {
    return async dispatch => {
        const data = await postService.getAll();
        dispatch({
            type: 'INIT_POSTS',
            data,
        });
    };
}

export function postCreate(newPost) {
    return async dispatch => {
        const data = await postService.create(newPost);
        dispatch({
            type: 'CREATE_POST',
            data,
        });
    };
}

export function postRemove(post) {
    return async dispatch => {
        await postService.remove(post.id);
        dispatch({
            type: 'REMOVE_POST',
            data: post
        });
    };
}

export default postsReducer;