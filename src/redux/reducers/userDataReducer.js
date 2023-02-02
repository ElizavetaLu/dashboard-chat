import { SET_USER_DATA } from "../actions/type"


const initialState = {
    name: '',
    lastname: '',
    userID: '',
    socketID: '',
    avatar: ''
}

const userDataReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...payload
            };
        default: return state
    }
}

export default userDataReducer