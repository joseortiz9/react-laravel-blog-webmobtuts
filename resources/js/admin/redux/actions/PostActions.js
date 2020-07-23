import PostActionTypes from '../actionTypes/PostTypes';

import Post from '../../apis/Post';

/**
 * list posts action
 * @param page
 */
function listPosts(page) {

    return function (dispatch, getState) {

        // start sending request (first dispatch)
        dispatch({
            type: PostActionTypes.LIST_POSTS
        });

        // async call must dispatch action whether on success or failure
        Post.list(page).then(response => {

            dispatch({
                type: PostActionTypes.LIST_POSTS_SUCCESS,
                data: response.data.data
            });
        }).catch(error => {

            dispatch({
                type: PostActionTypes.LIST_POSTS_FAILURE,
                error: error.response.data
            });
        });
    }
}

/**
 * handle field change
 *
 * fires on any field change of the post object
 */
function handleFieldChange(field, value, checked) {

    return function (dispatch, getState) {

        dispatch({
            type: PostActionTypes.HANDLE_FIELD_CHANGE,
            data: value,
            field,
            checked
        });
    }
}

/**
 * add post action
 *
 *
 * @returns {Function}
 */
function addPost(payload, cb) {

    return function (dispatch, getState) {

        dispatch({
            type: PostActionTypes.CREATE_POSTS
        });

        Post.add(payload).then(response => {

            dispatch({
                type: PostActionTypes.CREATE_POSTS_SUCCESS,
                data: response.data
            });

            cb();
        }).catch(error => {

            dispatch({
                type: PostActionTypes.CREATE_POSTS_FAILURE,
                error: error.response.data
            })
        })
    }
}

/**
 * show post action
 *
 * @param id
 * @returns {Function}
 */
function showPost(id)
{
    return function (dispatch, getState) {

        dispatch({
            type: PostActionTypes.SHOW_POST
        });


        Post.showOne(id).then(response => {
            dispatch({
                type: PostActionTypes.SHOW_POST_SUCCESS,
                data: response.data.data
            });

        }).catch(error => {
            dispatch({
                type: PostActionTypes.SHOW_POST_FAILURE,
                error: error.response.data
            });
        });
    }
}

/**
 * edit post action
 */
function editPost(id, payload, cb)
{
    return function (dispatch, getState) {

        dispatch({
            type: PostActionTypes.EDIT_POSTS
        });


        Post.edit(payload, id).then(response => {
            dispatch({
                type: PostActionTypes.EDIT_POSTS_SUCCESS,
                data: response.data
            });

            cb();
        }).catch(error => {
            dispatch({
                type: PostActionTypes.EDIT_POSTS_FAILURE,
                error: error.response.data
            })
        });
    }
}

/**
 * delete post action
 */
function deletePost(id)
{
    return function (dispatch, getState) {

        dispatch({
            type: PostActionTypes.DELETE_POSTS
        });


        Post.remove(id).then(response => {
            dispatch({
                type: PostActionTypes.DELETE_POSTS_SUCCESS,
                message: response.data.message,
                id: id
            });
        }).catch(error => {
            dispatch({
                type: PostActionTypes.DELETE_POSTS_FAILURE,
                error: error.response.data
            })
        });
    }
}

function setPostDefaults() {

    return function (dispatch, getState) {

        dispatch({
            type: PostActionTypes.SET_POST_DEFAULTS
        });
    }
}

function resetFields() {

    return function (dispatch, getState) {

        dispatch({
            type: PostActionTypes.RESET_FIELDS
        });
    }
}


export {
    listPosts,
    addPost,
    handleFieldChange,
    setPostDefaults,
    resetFields,
    showPost,
    editPost,
    deletePost
}
