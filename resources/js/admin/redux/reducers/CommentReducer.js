import CommentActionTypes from "../actionTypes/CommentTypes";

const initialState = {
    comments: {},
    comment: {},
    success_message: "",
    error_message: "",
    validation_errors: null,
    list_spinner: false
};

const commentReducer = function (state = initialState, action) {
    let comments = {};

    switch (action.type) {
        case CommentActionTypes.LIST_COMMENTS:
            return {
                ...state,
                list_spinner: true
            };
        case CommentActionTypes.LIST_COMMENTS_SUCCESS:
            return {
                ...state,
                list_spinner: false,
                comments: action.data
            };
        case CommentActionTypes.LIST_COMMENTS_FAILURE:
            return {
                ...state,
                list_spinner: false,
                error_message: action.error
            };
        case CommentActionTypes.DELETE_COMMENTS:
            return {
                ...state,
                list_spinner: true
            };
        case CommentActionTypes.DELETE_COMMENTS_SUCCESS:
            comments = state.comments;
            comments.data = state.comments.data.filter(item => item.id != action.id);

            return {
                ...state,
                list_spinner: false,
                comments: comments,
                success_message: action.message,
                error_message: ''
            };
        case CommentActionTypes.DELETE_COMMENTS_FAILURE:
            return {
                ...state,
                list_spinner: false,
                error_message: action.error.message,
                success_message: ''
            };
        case CommentActionTypes.EDIT_COMMENTS:
            return {
                ...state,
                list_spinner: true
            };
        case CommentActionTypes.EDIT_COMMENTS_SUCCESS:
            let all_comments = state.comments;

            let comments_data = state.comments.data;

            comments_data = comments_data.map(item => {
                if(item.id == action.id) {
                    return action.data.data;
                } else {
                    return item;
                }
            });

            all_comments.data = comments_data;

            return {
                ...state,
                list_spinner: false,
                comments: all_comments,
                success_message: action.data.message,
                error_message: "",
                validation_errors: null
            };
        case CommentActionTypes.EDIT_COMMENTS_FAILURE:
            return {
                ...state,
                list_spinner: false,
                error_message: action.error.message,
                validation_errors: action.error.errors,
                success_message: ""
            };
        default:
            return state;
    }
};

export default commentReducer;
