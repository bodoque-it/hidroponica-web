import { containerCreate } from '../actions/actions';
import axios from 'axios';

function fetchContainerCreate(new_name, new_volumen, is_active)  {
    return dispatch  => {
        const container = {
            rail_id: 1,
            name: new_name,
            volume: new_volumen,
        };
        const createContainer = async container => {
            const config = {
                headers: {
                    'Access-Control-Allow-Origin': '*',        
                    'Content-Type': 'application/json',
                }
            };
            try {
                const res = await axios.post('/api/containers/1', container , JSON.stringify(config));
                dispatch(containerCreate())
            } catch (error) {
                console.log(error);
            }
        }
        createContainer(container);
    }
}

export default fetchContainerCreate;