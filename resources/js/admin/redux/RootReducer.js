import { combineReducers } from 'redux';

import categoryReducer  from './reducers/CategoryReducer';
import tagReducer  from './reducers/TagReducer';
import postReducer from "./reducers/PostReducer";
import commentReducer from "./reducers/CommentReducer";

const rootReducer = combineReducers({
    category: categoryReducer,
    tag: tagReducer,
    post: postReducer,
    comment: commentReducer
});

export default rootReducer;
