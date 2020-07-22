import CategoryActionTypes from '../actionTypes/CategoryTypes';

import Category from '../../apis/Category';

function handleCategoryTitle(title)
{
    return function (dispatch, getState) {

        dispatch({
            type: CategoryActionTypes.HANDLE_CATEGORY_TITLE,
            data: title
        })
    }
}

function setCategoryDefaults() {

    return function (dispatch, getState) {

        dispatch({
            type: CategoryActionTypes.SET_CATEGORY_DEFAULTS
        });
    }
}

/**
 * list Categories action
 */
function listCategories(page = 1) {

    return function (dispatch, getState) {

        // start sending request (first dispatch)
        dispatch({
            type: CategoryActionTypes.LIST_CATEGORIES
        });


        // async call must dispatch action whether on success or failure
        Category.list(page).then(response => {
            dispatch({
                type: CategoryActionTypes.LIST_CATEGORIES_SUCCESS,
                data: response.data.data
            });
        }).catch(error => {
            dispatch({
                type: CategoryActionTypes.LIST_CATEGORIES_FAILURE,
                error: error.response.data
            });
        });
    }
}

/**
 * add category action
 */
function addCategory (title, cb) {

    return function(dispatch, getState) {

        // start creation show spinner
        dispatch({
            type: CategoryActionTypes.CREATE_CATEGORIES
        });

        // async call must dispatch action whether on success or failure
        Category.add(title).then(response => {
            dispatch({
                type: CategoryActionTypes.CREATE_CATEGORIES_SUCCESS,
                data: response.data
            });

            cb();
        }).catch(error => {
            dispatch({
                type: CategoryActionTypes.CREATE_CATEGORIES_FAILURE,
                error: error.response.data
            })
        });
    }
}

/**
 * show category action
 */
function showCategory(id)
{
    return function (dispatch, getState) {
        // start creation show spinner
        dispatch({
            type: CategoryActionTypes.SHOW_CATEGORY
        });


        // async call must dispatch action whether on success or failure
        Category.showOne(id).then(response => {
            dispatch({
                type: CategoryActionTypes.SHOW_CATEGORY_SUCCESS,
                data: response.data
            });

        }).catch(error => {
            dispatch({
                type: CategoryActionTypes.SHOW_CATEGORY_FAILURE,
                error: error.response.data
            });
        });
    }
}

/**
 * edit category action
 */
function editCategory(title, id, cb)
{
    return function (dispatch, getState) {
        // start creation show spinner
        dispatch({
            type: CategoryActionTypes.EDIT_CATEGORIES
        });


        // async call must dispatch action whether on success or failure
        Category.edit(title, id).then(response => {
            dispatch({
                type: CategoryActionTypes.EDIT_CATEGORIES_SUCCESS,
                data: response.data
            });

            cb();
        }).catch(error => {
            dispatch({
                type: CategoryActionTypes.EDIT_CATEGORIES_FAILURE,
                error: error.response.data
            })
        });
    }
}

/**
 * delete category action
 */
function deleteCategory(id)
{
    return function (dispatch, getState) {

        // start creation show spinner
        dispatch({
            type: CategoryActionTypes.DELETE_CATEGORIES
        });


        // async call must dispatch action whether on success or failure
        Category.remove(id).then(response => {
            dispatch({
                type: CategoryActionTypes.DELETE_CATEGORIES_SUCCESS,
                message: response.data.message,
                id: id
            });
        }).catch(error => {
            dispatch({
                type: CategoryActionTypes.DELETE_CATEGORIES_FAILURE,
                error: error.response.data
            })
        });
    }
}

/**
 * list all categories action
 * this function used as a helper action for example to populate dropdowns
 * in other forms
 */
function listAllCategories() {

    return function (dispatch, getState) {

        // async call
        Category.listAll().then(response => {
            dispatch({
                type: CategoryActionTypes.LIST_ALL_CATEGORIES,
                data: response.data.data
            });
        });
    }
}

export {
    listCategories,
    handleCategoryTitle,
    addCategory,
    showCategory,
    editCategory,
    deleteCategory,
    setCategoryDefaults,
    listAllCategories
};
