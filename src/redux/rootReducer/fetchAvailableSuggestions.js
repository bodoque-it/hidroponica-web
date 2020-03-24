import { findAvailableSuggestions } from '../actions/actions';

function fetchAvailableSuggestions(text) {
    return dispatch => {
        const regex = new RegExp(`^${text}`,'i');
       
        fetch('http://localhost:8080/api/users/available/1')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            const results = res.data
            dispatch(findAvailableSuggestions(results))
            
        })
        .catch(error => {
            console.log(error)
        })
        
    }
}

export default fetchAvailableSuggestions;
