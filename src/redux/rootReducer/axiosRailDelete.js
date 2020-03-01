import {railDelete} from '../actions/actions';
import axios from 'axios';

function axiosRailDelete(id_rail){
    return dispatch => {
        const deleteRail = async id_rail => {
            const config = {
                headers: {
                    'Access-Control-Allow-Origin': '*',        
                    'Content-Type': 'application/json',
                }
            };
            try {
                const res = await axios.delete(`/api/rails/1/${id_rail}` , JSON.stringify(config));
                dispatch(railDelete())
            } catch (error) {
                console.log(error);
            }
        }
        deleteRail(id_rail);
    }

}
export default axiosRailDelete;
