import { SELECT_DIALOG, UPDATE_MESSAGES_LIST, CLEAN_UP_DIALOG, ADD_LAST_MSG } from "../actions/type"


const initialState = {
    userName: '',
    userID: '',
    messages: [],
}

const userDialogReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SELECT_DIALOG:
            return { ...payload };

        case UPDATE_MESSAGES_LIST:
            return { ...state, messages: [...state.messages, payload] };

        case CLEAN_UP_DIALOG:
            return {
                userName: '',
                userID: '',
                messages: [],
            };

        default: return state
    }
}

export default userDialogReducer