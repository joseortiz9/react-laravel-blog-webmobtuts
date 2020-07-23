import CommentActionTypes from "../actionTypes/CommentTypes";

import Comment from '../../apis/Comment';


/**
 * list comments action
 */
function listComments(page) {

    return function (dispatch, getState) {

        dispatch({
            type: CommentActionTypes.LIST_COMMENTS
        });


        // async call
        Comment.list(page)
            .then(response => dispatch({type: CommentActionTypes.LIST_COMMENTS_SUCCESS, data: response.data.data}))
            .catch(error => dispatch({type: CommentActionTypes.LIST_COMMENTS_FAILURE, error: error.response.data}));
    }
}

/**
 * edit comment action
 */
function editComment(payload, id, cb = null) {

    return function (dispatch, getState) {

        dispatch({
            type: CommentActionTypes.EDIT_COMMENTS
        });

        Comment.edit(payload, id)
            .then(response => {
                dispatch({type: CommentActionTypes.EDIT_COMMENTS_SUCCESS, data: response.data, id});

                if(cb != null) {
                    cb();
                }
            })
            .catch(error => dispatch({type: CommentActionTypes.EDIT_COMMENTS_FAILURE, error: error.response.data, id}));


    }
}

/**
 * delete comment action
 */
function deleteComment(id)
{
    return function (dispatch, getState) {

        dispatch({
            type: CommentActionTypes.DELETE_COMMENTS
        });


        Comment.remove(id)
            .then(response => dispatch({type: CommentActionTypes.DELETE_COMMENTS_SUCCESS, message: response.data.message, id: id}))
            .catch(error => dispatch({type: CommentActionTypes.DELETE_COMMENTS_FAILURE, error: error.response.data}));
    }
}

export {
    listComments,
    editComment,
    deleteComment
}
