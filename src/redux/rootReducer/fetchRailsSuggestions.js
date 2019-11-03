import { findRailsSuggestions } from '../actions/actions';

function fetchRailsSuggestions(text) {
    return dispatch => {
        const regex = new RegExp(`^${text}`,'i');

        fetch('http://localhost:8000/api/rails/1')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            const results = res.data.filter( n => regex.test(n.name) )
            dispatch(findRailsSuggestions(results))
            return results;
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export default fetchRailsSuggestions;