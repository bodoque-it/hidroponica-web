import { loginSuccess, loginError } from '../actions/actions';
import axios from 'axios';



function signIn( username_input, passwod_input ) {
    return dispatch => {
        const user = {
            username: username_input,
            password: passwod_input,
        }
        
        const userLogin = async user => {
            const config = {
                headers: {
                    'Acces-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                }
            }
            try {
                const res = await axios.post('/login', user , JSON.stringify(config));
                if ( res.data.data === 'sale mono sapo' || res.data.data == 'undefined'){
                    dispatch(loginError("error"));
                }
                else {
                    dispatch(loginSuccess(res.data.data));
                }
            } catch (error) {
                dispatch(loginError(error));
            }
        }
        userLogin(user)
    }
}

export default signIn;