import { railCreate } from '../actions/actions';
import axios from 'axios';

function fetchRailCreate(new_name,new_location)  {
    return dispatch  => {
        const rail = {
            id: 1,
            fk_user: 1,
            location: new_location,
            name: new_name,
            containers: []
        };
        const createRail = async rail => {
            const config = {
                headers: {
                    'Access-Control-Allow-Origin': '*',        
                    'Content-Type': 'application/json',
                }
            };
            try {
                const res = await axios.post('/api/rails/1', rail , JSON.stringify(config));
                dispatch(railCreate())
            } catch (error) {
                console.log(error);
            }
        }
        createRail(rail);
    }
}

export default fetchRailCreate;

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