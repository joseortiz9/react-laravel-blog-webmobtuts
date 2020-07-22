import { combineReducers } from 'redux';

import categoryReducer  from './reducers/CategoryReducer';
import tagReducer  from './reducers/TagReducer';

const rootReducer = combineReducers({
    category: categoryReducer,
    tag: tagReducer
});

export default rootReducer;
