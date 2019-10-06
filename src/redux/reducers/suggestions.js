import { type as findSuggestions } from '../actions/findSuggestions';

const defaultState = [];

function reducer(state = defaultState, {type,payload}) {
    switch (type) {
        default:
            return state;
    }
}

export default reducer;