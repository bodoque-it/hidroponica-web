import { cycleUpdate } from '../actions/actions';
import axios from 'axios';

function axiosCycleUpdate(id_cycle, fk_container, fk_microclimate,new_estimated_date, new_isFinish ) {
    return dispatch => {
            const cycle = {
            id_container: fk_container,
            id_microclimate: fk_microclimate,
            estimated_date: new_estimated_date,
            isFinish: new_isFinish
        }

        const updateCycle = async cycle => {
            const config = {
                headers: {
                    'Acces-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            }
            try {
                const res = await axios.put(`/api/cycles/${id_cycle}`, cycle , JSON.stringify(config));
                dispatch(cycleUpdate())
            } catch (error) {
                console.log(error)
            }
        }
        updateCycle(cycle);
    }
}

export default axiosCycleUpdate;