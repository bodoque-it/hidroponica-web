import { findContainerCountSuggestions } from '../actions/actions'
import axios from 'axios';

function fetchContainerCountSuggestions( new_address )  {
    return dispatch  => {
        const infrastructure = {
            address: new_address
        };
        const metricsCount = async count => {
            const config = {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            };
            try {
                const res = await axios.get('/api/users/metrics/1' , JSON.stringify(config));
                console.log(res);
                dispatch(findContainerCountSuggestions(res.data.data));
            } catch (error) {
                console.log(error);
            }
        }
        metricsCount(infrastructure);
    }
}

export default fetchContainerCountSuggestions;