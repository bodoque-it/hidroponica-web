import { containerAddInRail } from '../actions/actions';
import axios from 'axios';

function axiosAddContainerInRail(id_rail, new_name, new_volume) {
    return dispatch => {
            const container = {
            name: new_name,
            volume: new_volume,
        }

        const addCntainerInRail = async container => {
            const config = {
                headers: {
                    'Acces-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            }
            try {
                const res = await axios.post(`/api/containers/1/${id_rail}`, container , JSON.stringify(config));
                dispatch(containerAddInRail())
            } catch (error) {
                console.log(error)
            }
        }
        addCntainerInRail(container);
    }
}

export default axiosAddContainerInRail;