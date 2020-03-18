import { containerCreate } from '../actions/actions';
import axios from 'axios';

function fetchContainerCreate(new_name, new_volumen, is_active)  {
    return dispatch  => {
        const container = {
            id: 1,
            owner_id: 1,
            rail_id: 1,
            nombre: new_name,
            volumen: new_volumen,
            activo: is_active,
        };
        const createContainer = async rail => {
            const config = {
                headers: {
                    'Access-Control-Allow-Origin': '*',        
                    'Content-Type': 'application/json',
                }
            };
            try {
                const res = await axios.post('/api/container/1', rail , JSON.stringify(config));
                dispatch(containerCreate())
            } catch (error) {
                console.log(error);
            }
        }
        createContainer(container);
    }
}

export default fetchContainerCreate;

// request option 2 

// const xhr = new XMLHttpRequest();
// xhr.addEventListener('load', () => {
// // update the state of the component with the result here
// console.log(xhr.responseText)
// })
// // open the request with the verb and the url
// const url = 'http://localhost:8000/api/rails/1';
// xhr.open('POST', url);
// // send the request
// xhr.send(JSON.stringify(rail));