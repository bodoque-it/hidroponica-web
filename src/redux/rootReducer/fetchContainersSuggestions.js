import { findContainerResults } from '../actions/actions'

function fetchContainerSuggestions(text) {

    return dispatch => {

        const regex = new RegExp(`^${text}`,'i');

        fetch('http://localhost:8080/api/containers/1')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            const results = res.data.filter( n => regex.test(n.name) )
            dispatch(findContainerResults(results))
            return results;
        })
        .catch(error => {
            console.log(error)
        })

    }

}

export default fetchContainerSuggestions;