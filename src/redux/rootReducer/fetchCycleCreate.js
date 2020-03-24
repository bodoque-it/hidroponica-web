import { cycleCreate } from '../actions/actions';
import axios from 'axios';

function fetchCycleCreate(fk_container, fk_microclimate, new_estimated_date)  {
    return dispatch  => {
        const cycle = {
            fk_user: 1,
            fk_container: fk_container,
            fk_microclimate: fk_microclimate,
            
            estimated_date: new_estimated_date,
        };
        const createCycle = async cycle => {
            const config = {
                headers: {
                    'Access-Control-Allow-Origin': '*',        
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            };
            try {
                const res = await axios.post('/api/cycles/1', cycle , JSON.stringify(config));
                dispatch(cycleCreate())
            } catch (error) {
                console.log(error);
            }
        }
        createCycle(cycle);
    }
}

export default fetchCycleCreate;