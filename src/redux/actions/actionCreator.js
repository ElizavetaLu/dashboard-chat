import {
    SET_USER_DATA,
    SET_USERS_LIST,
    SELECT_DIALOG,
    CLEAN_UP_DIALOG,
    UPDATE_MESSAGES_LIST,
} from "./type"




export const setUserData = userData => ({
    type: SET_USER_DATA,
    payload: userData
})
export const setUsersList = usersList => ({
    type: SET_USERS_LIST,
    payload: usersList
})

export const selectDialog = userDialog => ({
    type: SELECT_DIALOG,
    payload: userDialog
})

export const cleanUpDialog = () => ({ type: CLEAN_UP_DIALOG })

export const updateMessagesList = message => ({
    type: UPDATE_MESSAGES_LIST,
    payload: message
})
