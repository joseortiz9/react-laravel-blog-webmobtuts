import UserActionTypes from "../actionTypes/UserTypes";
import User from '../../apis/User';


/**
 * set user defaults
 */
function setUserDefaults() {

    return function (dispatch, getState) {

        dispatch({
            type: UserActionTypes.SET_USER_DEFAULTS
        });
    }
}

/**
 * list Users action
 */
function listUsers(page = 1) {

    return function (dispatch, getState) {

        dispatch({
            type: UserActionTypes.LIST_USERS
        });


        User.list(page).then(response => {
            dispatch({
                type: UserActionTypes.LIST_USERS_SUCCESS,
                data: response.data.data
            });
        }).catch(error => {
            dispatch({
                type: UserActionTypes.LIST_USERS_FAILURE,
                error: error.response.data
            });
        });
    }
}

/**
 * add user action
 */
function addUser (title, cb) {

    return function(dispatch, getState) {

        dispatch({
            type: UserActionTypes.CREATE_USERS
        });

        User.add(title).then(response => {
            dispatch({
                type: UserActionTypes.CREATE_USERS_SUCCESS,
                data: response.data
            });

            cb();
        }).catch(error => {
            dispatch({
                type: UserActionTypes.CREATE_USERS_FAILURE,
                error: error.response.data
            })
        });
    }
}

/**
 * show user action
 */
function showUser(id)
{
    return function (dispatch, getState) {

        dispatch({
            type: UserActionTypes.SHOW_USER
        });

        User.showOne(id).then(response => {
            dispatch({
                type: UserActionTypes.SHOW_USER_SUCCESS,
                data: response.data
            });

        }).catch(error => {
            dispatch({
                type: UserActionTypes.SHOW_USER_FAILURE,
                error: error.response.data
            });
        });
    }
}

/**
 * edit user action
 */
function editUser(payload, id, cb)
{
    return function (dispatch, getState) {

        dispatch({
            type: UserActionTypes.EDIT_USERS
        });

        User.edit(payload, id).then(response => {
            dispatch({
                type: UserActionTypes.EDIT_USERS_SUCCESS,
                data: response.data
            });

            cb();
        }).catch(error => {
            dispatch({
                type: UserActionTypes.EDIT_USERS_FAILURE,
                error: error.response.data
            })
        });
    }
}

/**
 * delete user action
 */
function deleteUser(id)
{
    return function (dispatch, getState) {


        dispatch({
            type: UserActionTypes.DELETE_USERS
        });


        User.remove(id).then(response => {
            dispatch({
                type: UserActionTypes.DELETE_USERS_SUCCESS,
                message: response.data.message,
                id: id
            });
        }).catch(error => {
            dispatch({
                type: UserActionTypes.DELETE_USERS_FAILURE,
                error: error.response.data
            })
        });
    }
}

/**
 * handle user change
 *
 * fires on any field change of the user object
 */
function handleUserChange(field, value, checked) {

    return function (dispatch, getState) {

        dispatch({
            type: UserActionTypes.HANDLE_USER_CHANGE,
            data: value,
            field,
            checked
        });
    }
}

/**
 * reset user fields action
 */
function resetUserFields() {

    return function (dispatch, getState) {

        dispatch({
            type: UserActionTypes.RESET_USER_FIELDS
        });
    }
}

export {
    setUserDefaults,
    listUsers,
    addUser,
    showUser,
    editUser,
    deleteUser,
    handleUserChange,
    resetUserFields
};





