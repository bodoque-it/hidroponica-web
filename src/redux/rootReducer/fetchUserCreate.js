import { userCreate } from '../actions/actions';
import fetch from 'isomorphic-fetch'

function fetchUserCreate(username,firstName,lastName,password,email) {
    return dispatch => {
        const usuario = {
            username:username,
            first_name:firstName,
            last_name:lastName,
            password:password,
            email:email,
        }

        return fetch('http://localhost:8000/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'no-cors',
            credentials: 'same-origin',
            body: JSON.stringify( { username, firstName, lastName, password, email } ) })
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(userCreate())
            console.log("Se a realizado la creación del usuario exitosamente")
            return usuario;
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export default fetchUserCreate;