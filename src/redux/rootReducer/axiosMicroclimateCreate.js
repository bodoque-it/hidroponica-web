import { microclimateCreate } from '../actions/actions';
import axios from 'axios';

function axiosMicroclimateCreate(new_name, new_intensity, new_lightType, new_waterPH, new_dailyHours, new_lightStartTime)  {
    return dispatch  => {
        const microclimate = {
            name: new_name,
            intensity: new_intensity,
            lightType: new_lightType,
            waterPH: new_waterPH,
            dailyHours: new_dailyHours,
            lightStartTime: new_lightStartTime
        };
        const createRail = async microclimate => {
            const config = {
                headers: {
                    'Access-Control-Allow-Origin': '*',        
                    'Content-Type': 'application/json',
                }
            };
            try {
                const res = await axios.post('/api/microclimates/1', microclimate , JSON.stringify(config));
                dispatch(microclimateCreate())
            } catch (error) {
                console.log(error);
            }
        }
        createRail(microclimate);
    }
}

export default axiosMicroclimateCreate;