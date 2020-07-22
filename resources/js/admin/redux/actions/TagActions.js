import TagActionTypes from '../actionTypes/TagTypes';

import Tag from '../../apis/Tag';

function handleTagTitle(title)
{
    return function (dispatch, getState) {

        dispatch({
            type: TagActionTypes.HANDLE_TAG_TITLE,
            data: title
        });
    }
}

function setTagDefaults() {

    return function (dispatch, getState) {

        dispatch({
            type: TagActionTypes.SET_TAG_DEFAULTS
        });
    }
}

/**
 * list Tags action
 */
function listTags(page = 1) {

    return function (dispatch, getState) {

        // start sending request (first dispatch)
        dispatch({
            type: TagActionTypes.LIST_TAGS
        });


        // async call must dispatch action whether on success or failure
        Tag.list(page).then(response => {
            dispatch({
                type: TagActionTypes.LIST_TAGS_SUCCESS,
                data: response.data.data
            });
        }).catch(error => {
            dispatch({
                type: TagActionTypes.LIST_TAGS_FAILURE,
                error: error.response.data
            });
        });
    }
}

/**
 * list all action
 * this function used as a helper action for example to populate dropdowns
 * in other forms
 */
function listAllTags() {

    return function (dispatch, getState) {

        // async call
        Tag.listAll().then(response => {
            dispatch({
                type: TagActionTypes.LIST_ALL_TAGS,
                data: response.data.data
            });
        });
    }
}

/**
 * add tag action
 */
function addTag (title, cb) {

    return function(dispatch, getState) {

        // start creation show spinner
        dispatch({
            type: TagActionTypes.CREATE_TAGS
        });

        // async call must dispatch action whether on success or failure
        Tag.add(title).then(response => {
            dispatch({
                type: TagActionTypes.CREATE_TAGS_SUCCESS,
                data: response.data
            });

            cb();
        }).catch(error => {
            dispatch({
                type: TagActionTypes.CREATE_TAGS_FAILURE,
                error: error.response.data
            })
        });
    }
}

/**
 * show tag action
 */
function showTag(id)
{
    return function (dispatch, getState) {
        // start creation show spinner
        dispatch({
            type: TagActionTypes.SHOW_TAG
        });


        // async call must dispatch action whether on success or failure
        Tag.showOne(id).then(response => {
            dispatch({
                type: TagActionTypes.SHOW_TAG_SUCCESS,
                data: response.data
            });

        }).catch(error => {
            dispatch({
                type: TagActionTypes.SHOW_TAG_FAILURE,
                error: error.response.data
            });
        });
    }
}

/**
 * edit tag action
 */
function editTag(title, id, cb)
{
    return function (dispatch, getState) {
        // start creation show spinner
        dispatch({
            type: TagActionTypes.EDIT_TAGS
        });


        // async call must dispatch action whether on success or failure
        Tag.edit(title, id).then(response => {
            dispatch({
                type: TagActionTypes.EDIT_TAGS_SUCCESS,
                data: response.data
            });

            cb();
        }).catch(error => {
            dispatch({
                type: TagActionTypes.EDIT_TAGS_FAILURE,
                error: error.response.data
            })
        });
    }
}

/**
 * delete tag action
 */
function deleteTag(id)
{
    return function (dispatch, getState) {

        // start creation show spinner
        dispatch({
            type: TagActionTypes.DELETE_TAGS
        });


        // async call must dispatch action whether on success or failure
        Tag.remove(id).then(response => {
            dispatch({
                type: TagActionTypes.DELETE_TAGS_SUCCESS,
                message: response.data.message,
                id: id
            });
        }).catch(error => {
            dispatch({
                type: TagActionTypes.DELETE_TAGS_FAILURE,
                error: error.response.data
            })
        });
    }
}

export {
    listTags,
    handleTagTitle,
    addTag,
    showTag,
    editTag,
    deleteTag,
    setTagDefaults,
    listAllTags
};
