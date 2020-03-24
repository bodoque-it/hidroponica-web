import { microclimateDelete } from '../actions/actions';
import axios from 'axios';

function axiosMicroclimateDelete( id_microclimate )  {
    return dispatch  => {
        const deleteMicroclimate = async id_microclimate => {
            const config = {
                headers: {
                    'Access-Control-Allow-Origin': '*',        
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            };
            try {
                const res = await axios.delete(`/api/microclimates/1/${id_microclimate}`, JSON.stringify(config));
                dispatch(microclimateDelete())
            } catch (error) {
                console.log(error);
            }
        }
        deleteMicroclimate(id_microclimate);
    }
}

export default axiosMicroclimateDelete;