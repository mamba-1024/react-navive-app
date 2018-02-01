import {
    HANDLE_LOGIN,
    handleLogin
} from '../../action/login';

const initialState = {
    userName: null,
}

export const loginReducer = (state = initialState, action) => {
    const data = action.param;
    switch (action.type) {
        case HANDLE_LOGIN: {
            return Object.assign({}, state, {
                userName: data
            })
        }
        default: return state;
    }
}