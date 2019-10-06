import { createStore, combineReducers } from 'redux';
import currentContainer from './reducers/currentContainer';
import suggestions from './reducers/suggestions';
import results from './reducers/results';

const reducer = combineReducers({
    // reducers
    results,
    suggestions,
    currentContainer,

});

const store = createStore(reducer);

export default store;