import { combineReducers } from 'redux';

import categoryReducer  from './reducers/CategoryReducer';

const rootReducer = combineReducers({
    category: categoryReducer
});

export default rootReducer;
