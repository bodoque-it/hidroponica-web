import { createStore, combineReducers } from 'redux';
import currentContainer from './reducers/currentContainer';
import suggestions from './reducers/suggestions';
import railsResults from './reducers/railsResults';
import containersResults from './reducers/containersResults';

const reducer = combineReducers({
    // reducers
    railsResults,
    containersResults,
    suggestions,
    currentContainer,

});

const store = createStore(reducer);

export default store;