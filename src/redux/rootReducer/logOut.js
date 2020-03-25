import { logoutSuccess, logoutError } from '../actions/actions';
import axios from 'axios';



function logOut( token ) {
    return dispatch => {
        
        const userLogout = async token => {
            const config = {
                headers: {
                    'Acces-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                }
            }
            try {
                const res = await axios.get('/logout', JSON.stringify(config));
                dispatch(logoutSuccess(token));
            } catch (error) {
                dispatch(logoutError(error));
            }
        }
        userLogout(token)
    }
}

export default logOut;