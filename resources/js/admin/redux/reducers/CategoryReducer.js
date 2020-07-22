import CategoryActionTypes from '../actionTypes/CategoryTypes';

const initialState = {
    categories: {},        // used in listing page
    all_categories: [],    // used to fill dropdowns
    category: {
        id: "",
        title: "",
        slug: ""
    },
    success_message: "",
    error_message: "",
    validation_errors: null,
    list_spinner: false,
    create_update_spinner: false
};

const categoryReducer = function (state = initialState, action) {
    switch (action.type) {
        case CategoryActionTypes.SET_CATEGORY_DEFAULTS:
            return {
                ...state,
                category: {...state.category},
                success_message: "",
                error_message: "",
                validation_errors: null,
                list_spinner: false,
                create_update_spinner: false
            };
        case CategoryActionTypes.HANDLE_CATEGORY_TITLE:
            return {
                ...state,
                category: {...state.category, title: action.data}
            };
        case CategoryActionTypes.LIST_CATEGORIES:
            return {
                ...state,
                list_spinner: true
            };
        case CategoryActionTypes.LIST_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: action.data,
                list_spinner: false
            };
        case CategoryActionTypes.LIST_CATEGORIES_FAILURE:
            return {
                ...state,
                error_message: action.error,
                list_spinner: false
            };
        case CategoryActionTypes.LIST_ALL_CATEGORIES:
            return {
                ...state,
                all_categories: action.data
            };
        case CategoryActionTypes.CREATE_CATEGORIES:
            return {
                ...state,
                create_update_spinner: true
            };
        case CategoryActionTypes.CREATE_CATEGORIES_SUCCESS:
            return {
                ...state,
                create_update_spinner: false,
                category: action.data.data,
                success_message: action.data.message,
                error_message: "",
                validation_errors: null
            };
        case CategoryActionTypes.CREATE_CATEGORIES_FAILURE:
            return {
                ...state,
                create_update_spinner: false,
                error_message: action.error.message,
                validation_errors: action.error.errors,
                success_message: ""
            };
        case CategoryActionTypes.SHOW_CATEGORY:
            return {
                ...state,
                create_update_spinner: true
            };
        case CategoryActionTypes.SHOW_CATEGORY_SUCCESS:
            return {
                ...state,
                create_update_spinner: false,
                category: action.data.data
            };
        case CategoryActionTypes.SHOW_CATEGORY_FAILURE:
            return {
                ...state,
                create_update_spinner: false,
                error_message: action.error.message
            };
        case CategoryActionTypes.EDIT_CATEGORIES:
            return {
                ...state,
                create_update_spinner: true
            };
        case CategoryActionTypes.EDIT_CATEGORIES_SUCCESS:
            return {
                ...state,
                create_update_spinner: false,
                category: action.data.data,
                success_message: action.data.message,
                error_message: "",
                validation_errors: null
            };
        case CategoryActionTypes.EDIT_CATEGORIES_FAILURE:
            return {
                ...state,
                create_update_spinner: false,
                error_message: action.error.message,
                validation_errors: action.error.errors,
                success_message: ""
            };
        case CategoryActionTypes.DELETE_CATEGORIES:
            return {
                ...state,
                list_spinner: true
            };
        case CategoryActionTypes.DELETE_CATEGORIES_SUCCESS:
            let cats = state.categories;
            cats.data = state.categories.data.filter(item => item.id != action.id);

            return {
                ...state,
                list_spinner: false,
                categories: cats,
                success_message: action.message,
                error_message: ''
            };
        case CategoryActionTypes.DELETE_CATEGORIES_FAILURE:
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

export default categoryReducer;
