import { microclimateUpdate } from '../actions/actions';
import axios from 'axios';

function axiosMicroclimateUpdate( id_microclimate, new_name, new_intensity, new_lightType, new_waterPH, new_dailyHours, new_lightStartTime, new_temperature, new_humidity)  {
    return dispatch  => {
        const microclimate = {
            name: new_name,
            intensity: new_intensity,
            lightType: new_lightType,
            waterPH: new_waterPH,
            dailyHours: new_dailyHours,
            lightStartTime: new_lightStartTime,
            temperature: new_temperature,
            humidity: new_humidity
        };
        const updateMicroclimate = async microclimate => {
            const config = {
                headers: {
                    'Access-Control-Allow-Origin': '*',        
                    'Content-Type': 'application/json',
                }
            };
            try {
                const res = await axios.put(`/api/microclimates/1/${id_microclimate}`, microclimate , JSON.stringify(config));
                dispatch(microclimateUpdate())
            } catch (error) {
                console.log(error);
            }
        }
        updateMicroclimate(microclimate);
    }
}

export default axiosMicroclimateUpdate;