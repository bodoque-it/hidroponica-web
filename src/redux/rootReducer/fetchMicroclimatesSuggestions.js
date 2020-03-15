import { findMicroclimatesSuggestions } from '../actions/actions';

function fetchMicroclimatesSuggestions(text) {
    return dispatch => {
        const regex = new RegExp(`^${text}`,'i');

        fetch('/api/microclimates/1')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            const results = res.data.filter( n => regex.test(n.name) )
            dispatch(findMicroclimatesSuggestions(results))
            return results;
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export default fetchMicroclimatesSuggestions;
