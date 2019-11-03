import { findCyclesSuggestions } from '../actions/actions';

function fetchCyclesSuggestions(text) {
    return dispatch => {
        const regex = new RegExp(`^${text}`,'i');

        fetch('http://localhost:8000/api/cycles/1')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            const results = res.data.filter( n => regex.test(n.name) )
            dispatch(findCyclesSuggestions(results))
            return results;
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export default fetchCyclesSuggestions;