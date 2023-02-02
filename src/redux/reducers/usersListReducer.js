import { SET_USERS_LIST} from "../actions/type"


const initialState = []

const usersListReducer = (state = initialState, { type, payload }) => {

    switch (type) {

        case SET_USERS_LIST:
            return [...payload];

        default: return state
    }
}

export default usersListReducer