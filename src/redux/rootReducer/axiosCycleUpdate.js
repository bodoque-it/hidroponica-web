import { cycleUpdate } from '../actions/actions';
import axios from 'axios';

function axiosCycleUpdate(id_cycle, new_begin_date, new_estimated_date, new_finish_date) {
    return dispatch => {
            const cycle = {
            id: id_cycle,
            fk_user: 1,
            fk_container: 1,
            fk_microclimate: 1,
            begin_date: new_begin_date,
            estimated_date: new_estimated_date,
            finish_date: new_finish_date,
        }

        console.log(id_cycle, new_begin_date, new_estimated_date, new_finish_date);
        const updateCycle = async cycle => {
            const config = {
                headers: {
                    'Acces-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                }
            }
            try {
                const res = await axios.put(`/api/cycles/1/${id_cycle}`, cycle , JSON.stringify(config));
                dispatch(cycleUpdate())
            } catch (error) {
                console.log(error)
            }
        }
        updateCycle(cycle);
    }
}

export default axiosCycleUpdate;