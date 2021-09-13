import { combineReducers, createStore } from 'redux';

import * as reducers from './reducer';
import * as actions from './actions';



const rootReducer = combineReducers({
    ...reducers,
});

export const store = createStore(rootReducer);

export default {
    store,
    actions,
};
