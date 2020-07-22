import TagActionTypes from "../actionTypes/TagTypes";

const initialState = {
    tags: {},            // used in listing page
    all_tags: [],        // used in fill dropdowns
    tag: {
        id: "",
        title: ""
    },
    success_message: "",
    error_message: "",
    validation_errors: null,
    list_spinner: false,
    create_update_spinner: false
};

const tagReducer = function (state = initialState, action) {
    switch (action.type) {
        case TagActionTypes.SET_TAG_DEFAULTS:
            return {
                ...state,
                tag: {...state.tag},
                success_message: "",
                error_message: "",
                validation_errors: null,
                list_spinner: false,
                create_update_spinner: false
            };
        case TagActionTypes.HANDLE_TAG_TITLE:
            return {
                ...state,
                tag: {...state.tag, title: action.data}
            };
        case TagActionTypes.LIST_TAGS:
            return {
                ...state,
                list_spinner: true
            };
        case TagActionTypes.LIST_TAGS_SUCCESS:
            return {
                ...state,
                tags: action.data,
                list_spinner: false
            };
        case TagActionTypes.LIST_TAGS_FAILURE:
            return {
                ...state,
                error_message: action.error,
                list_spinner: false
            };
        case TagActionTypes.LIST_ALL_TAGS:
            return {
                ...state,
                all_tags: action.data
            };
        case TagActionTypes.CREATE_TAGS:
            return {
                ...state,
                create_update_spinner: true
            };
        case TagActionTypes.CREATE_TAGS_SUCCESS:
            return {
                ...state,
                create_update_spinner: false,
                tag: action.data.data,
                success_message: action.data.message,
                error_message: "",
                validation_errors: null
            };
        case TagActionTypes.CREATE_TAGS_FAILURE:
            return {
                ...state,
                create_update_spinner: false,
                error_message: action.error.message,
                validation_errors: action.error.errors,
                success_message: ""
            };
        case TagActionTypes.SHOW_TAG:
            return {
                ...state,
                create_update_spinner: true
            };
        case TagActionTypes.SHOW_TAG_SUCCESS:
            return {
                ...state,
                create_update_spinner: false,
                tag: action.data.data
            };
        case TagActionTypes.SHOW_TAG_FAILURE:
            return {
                ...state,
                create_update_spinner: false,
                error_message: action.error.message
            };

        case TagActionTypes.EDIT_TAGS:
            return {
                ...state,
                create_update_spinner: true
            };
        case TagActionTypes.EDIT_TAGS_SUCCESS:
            return {
                ...state,
                create_update_spinner: false,
                tag: action.data.data,
                success_message: action.data.message,
                error_message: "",
                validation_errors: null
            };
        case TagActionTypes.EDIT_TAGS_FAILURE:
            return {
                ...state,
                create_update_spinner: false,
                error_message: action.error.message,
                validation_errors: action.error.errors,
                success_message: ""
            };
        case TagActionTypes.DELETE_TAGS:
            return {
                ...state,
                list_spinner: true
            };
        case TagActionTypes.DELETE_TAGS_SUCCESS:
            let tags = state.tags;
            tags.data = state.tags.data.filter(item => item.id != action.id);

            return {
                ...state,
                list_spinner: false,
                tags: tags,
                success_message: action.message,
                error_message: ''
            };
        case TagActionTypes.DELETE_TAGS_FAILURE:
            return {
                ...state,
                list_spinner: false,
                error_message: action.error.message,
                success_message: ''
            };
        default:
            return state;
    }
};

export default tagReducer;
