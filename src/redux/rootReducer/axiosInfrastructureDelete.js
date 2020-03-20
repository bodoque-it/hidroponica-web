import { infrastructureDelete } from '../actions/actions';
import axios from 'axios';

function axiosInfrastructureDelete( delete_address )  {
    return dispatch  => {
        
        const deleteInfrastructure = async delete_address => {
            const config = {
                headers: {
                    'Access-Control-Allow-Origin': '*',        
                    'Content-Type': 'application/json',
                }
            };
            try {
                const res = await axios.delete(`/api/infrastructures/${delete_address}` , JSON.stringify(config));
                dispatch(infrastructureDelete())
            } catch (error) {
                console.log(error);
            }
        }
        deleteInfrastructure(delete_address);
    }
}

export default axiosInfrastructureDelete;