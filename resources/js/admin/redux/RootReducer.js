import { combineReducers } from 'redux';

import categoryReducer  from './reducers/CategoryReducer';
import tagReducer  from './reducers/TagReducer';
import postReducer from "./reducers/PostReducer";

const rootReducer = combineReducers({
    category: categoryReducer,
    tag: tagReducer,
    post: postReducer
});

export default rootReducer;
