import { containerUpdate } from '../actions/actions';
import axios from 'axios';

function axiosContainerUpdate(id_container, new_name, new_volume, is_active) {
    return dispatch => {
            const container = {
            id: id_container,
            fk_rail: 1,
            fk_user: 1,
            name: new_name,
            volume: new_volume,
            active: is_active,
        }

        console.log(id_container, new_name, new_volume);
        const updateContainer = async container => {
            const config = {
                headers: {
                    'Acces-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                }
            }
            try {
                const res = await axios.put(`/api/containers/1/${id_container}`, container , JSON.stringify(config));
                dispatch(containerUpdate())
            } catch (error) {
                console.log(error)
            }
        }
        updateContainer(container);
    }
}

export default axiosContainerUpdate;