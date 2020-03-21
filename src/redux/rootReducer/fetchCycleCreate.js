import { cycleCreate } from '../actions/actions';
import axios from 'axios';

function fetchCycleCreate(new_begin_date, new_estimated_date, new_finish_date)  {
    return dispatch  => {
        const cycle = {
            id: 1,
            fk_user: 1,
            fk_container: 1,
            fk_microclimate: 1,
            begin_date: new_begin_date,
            estimated_date: new_estimated_date,
            finish_date: new_finish_date,
        };
        const createCycle = async rail => {
            const config = {
                headers: {
                    'Access-Control-Allow-Origin': '*',        
                    'Content-Type': 'application/json',
                }
            };
            try {
                const res = await axios.post('/api/cycles/1', rail , JSON.stringify(config));
                dispatch(cycleCreate())
            } catch (error) {
                console.log(error);
            }
        }
        createCycle(cycle);
    }
}

export default fetchCycleCreate;