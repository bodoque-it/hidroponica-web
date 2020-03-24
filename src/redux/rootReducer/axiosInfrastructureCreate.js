import { infrastructureCreate } from '../actions/actions';
import axios from 'axios';

function axiosInfrastructureCreate( new_address )  {
    return dispatch  => {
        const infrastructure = {
            address: new_address
        };
        const createInfrastructure = async infrastructure => {
            const config = {
                headers: {
                    'Access-Control-Allow-Origin': '*',        
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            };
            try {
                const res = await axios.post('/api/infrastructures/1', infrastructure , JSON.stringify(config));
                dispatch(infrastructureCreate())
            } catch (error) {
                console.log(error);
            }
        }
        createInfrastructure(infrastructure);
    }
}

export default axiosInfrastructureCreate;