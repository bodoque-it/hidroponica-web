import { findMicroclimatesSuggestions } from '../actions/actions';

function fetchMicroclimatesSuggestions(text) {
    return dispatch => {
        const regex = new RegExp(`^${text}`,'i');

        var config = { method: 'GET',
                headers: new Headers({
                    'Authorization': `Bearer ${localStorage.getItem("token")}`,
                    'Content-Type': 'application/x-www-form-urlencoded'
                }),
        };

        fetch('/api/microclimates/1',config )
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
