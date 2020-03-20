import { findContainersSuggestions } from '../actions/actions'

function fetchContainersSuggestions(text) {

    return dispatch => {

        const regex = new RegExp(`^${text}`,'i');

        fetch('http://localhost:8080/api/containers/1')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            const results = res.data.filter( n => regex.test(n.name) )
            dispatch(findContainersSuggestions(results))
            console.log(results)
            return results;
        })
        .catch(error => {
            console.log(error)
        })

    }

}

export default fetchContainersSuggestions;