import postService from '../services/post';

function userReducer(state = null, action) {
    switch (action.type) {
        case 'LOGIN':
            return action.data;

        case 'LOGOUT':
            return null;

        default:
            return state;
    }
}

// Actions

export function userLocal() {
    return async disptach => {
        const loggedUser = await window
            .localStorage
            .getItem('simpleloggeduser');

        if (loggedUser) {
            const user = JSON.parse(loggedUser);
            postService.setToken(user.token);
            disptach({
                type: 'LOGIN',
                data: user,
            });
        }
    };
}

export function userLogin(user) {
    return {
        type: 'LOGIN',
        data: user,
    };
}

// Could use userLogin(null) for userLogout, but defining
// a creator for each action will be semantically more
// readable and cleaner.

export function userLogout() {
    return { type: 'LOGOUT' };
}

export default userReducer;