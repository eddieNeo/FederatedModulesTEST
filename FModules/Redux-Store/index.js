import { combineReducers, createStore } from 'redux';

import * as reducers from './reducer';

const rootReducer = combineReducers({
    ...reducers,
});

export default store = createStore(rootReducer);

