import {cycleDelete} from '../actions/actions';
import axios from 'axios';

function axiosCycleDelete(id_cycle){
    return dispatch => {
        const deleteCycle = async id_cycle => {
            const config = {
                headers: {
                    'Access-Control-Allow-Origin': '*',        
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            };
            try {
                const res = await axios.delete(`/api/cycle/1/${id_cycle}` , JSON.stringify(config));
                dispatch(cycleDelete())
            } catch (error) {
                console.log(error);
            }
        }
        deleteCycle(id_cycle);
    }

}
export default axiosCycleDelete;
