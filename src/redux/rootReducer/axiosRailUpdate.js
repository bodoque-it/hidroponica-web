import { railUpdate } from '../actions/actions';
import axios from 'axios';

function axiosRailUpdate(id_rail,new_name,new_location)  {
    return dispatch  => {
        const rail = {
            id: id_rail,
            fk_user: 1,
            location: new_location,
            name: new_name,
            containers: []
        };
        const updateRail = async rail => {
            const config = {
                headers: {
                    'Access-Control-Allow-Origin': '*',        
                    'Content-Type': 'application/json',
                }
            };
            try {
                const res = await axios.put(`/api/rails/1/${id_rail}`, rail , JSON.stringify(config));
                dispatch(railUpdate())
            } catch (error) {
                console.log(error);
            }
        }
        updateRail(rail);
    }
}

export default axiosRailUpdate;