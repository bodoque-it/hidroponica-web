import { findSuggestions } from '../actions/actions';
import items from '../../data/items';

function fetchSuggestions(text) {
    return dispatch => {
        const regex = new RegExp(`^${text}`,'i');
        const results = items.filter( n => regex.test(n.title) )
        dispatch(findSuggestions(results))
        return results;
        // fetch('http://localhost:8000/api/rails/1')
        // .then(res => res.json())
        // .then(res => {
        //     if(res.error) {
        //         throw(res.error);
        //     }
        //     dispatch(findSuggestions(res.data))
        //     return res.data;
        // })
        // .catch(error => {
        //     console.log(error)
        // })
    }
}

export default fetchSuggestions;