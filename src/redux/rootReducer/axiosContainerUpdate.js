import { containerUpdate } from '../actions/actions';
import axios from 'axios';

function axiosContainerUpdate(id_container, new_name, new_volume, is_active) {
    return dispatch => {
            const container = {
            id: id_container,
            fk_rail: 1,
            name: new_name,
            volume: new_volume,
            active: is_active,
        }

        const updateContainer = async container => {
            const config = {
                headers: {
                    'Acces-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            }
            try {
                const res = await axios.put(`/api/containers/${id_container}`, container , JSON.stringify(config));
                dispatch(containerUpdate())
            } catch (error) {
                console.log(error)
            }
        }
        updateContainer(container);
    }
}

export default axiosContainerUpdate;