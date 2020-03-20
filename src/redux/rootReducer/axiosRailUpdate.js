import { railUpdate } from '../actions/actions';
import axios from 'axios';

function axiosRailUpdate( id_rail, new_name, new_infrastructure_address )  {
    return dispatch  => {
        console.log("Update: "+new_infrastructure_address)
        const rail = {
            name: new_name,
            infrastructure: new_infrastructure_address
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