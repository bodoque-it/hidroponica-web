import { findInfrastructuresSuggestions } from '../actions/actions';

function fetchInfrastructuresSuggestions(text) {
    return dispatch => {
        const regex = new RegExp(`^${text}`,'i');
        
        var config = { method: 'GET',
            headers: new Headers({
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
                'Content-Type': 'application/json',
            }), 
        };

        fetch('/api/infrastructures/1',config)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            const results = res.data.filter( n => regex.test(n.name) )
            dispatch(findInfrastructuresSuggestions(results))
            return results;
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export default fetchInfrastructuresSuggestions;
