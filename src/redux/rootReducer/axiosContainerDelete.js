import {containerDelete} from '../actions/actions';
import axios from 'axios';

function axiosContainerDelete(id_container){
    return dispatch => {
        const deleteContainer = async id_container => {
            const config = {
                headers: {
                    'Access-Control-Allow-Origin': '*',        
                    'Content-Type': 'application/json',
                }
            };
            try {
                const res = await axios.delete(`/api/rails/1/${id_container}` , JSON.stringify(config));
                dispatch(containerDelete())
            } catch (error) {
                console.log(error);
            }
        }
        deleteContainer(id_container);
    }

}
export default axiosContainerDelete;
