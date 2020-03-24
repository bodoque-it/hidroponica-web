import { findAvailableSuggestions } from '../actions/actions';

function fetchAvailableSuggestions(text) {
    return dispatch => {
        const regex = new RegExp(`^${text}`,'i');

        var config = { method: 'GET',
            headers: new Headers({
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }), 
        };
       
        fetch('http://localhost:8080/api/users/available/1',config )
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
