import { FIND_RAILS_SUGGESTIONS,
        FIND_RAILS_RESULTS, 
        FIND_CURRENT_CONTAINER,
        FIND_CONTAINERS_RESULTS,
        FIND_CYCLES_SUGGESTIONS,
        FIND_MICROCLIMATES_SUGGESTIONS,
        FIND_INFRASTRUCTURES_SUGGESTIONS ,
        FIND_CONTAINERS_SUGGESTIONS,
        RAIL_CREATE,RAIL_DELETE,
        RAIL_UPDATE,
        MICROCLIMATE_CREATE,
        MICROCLIMATE_DELETE,
        MICROCLIMATE_UPDATE,
        INFRASTRUCTURE_CREATE,
        INFRASTRUCTURE_DELETE,
        INFRASTRUCTURE_UPDATE,
        CONTAINER_ADD_IN_RAIL
} from '../actions/actions';
         
const defaultState = {
    suggestions: [],
    infrastructures: [],
    containers: [],
    container: {},
    rails: [],
}

export function rootReducer(state = defaultState, {type,payload}) {
    switch (type) {
        case FIND_RAILS_SUGGESTIONS:{
            
            return {
                ...state,
                suggestions: payload
            }
        }

        case FIND_CYCLES_SUGGESTIONS:{
            return {
                ...state,
                suggestions: payload
            }
        }

        case FIND_MICROCLIMATES_SUGGESTIONS:{
            return {
                ...state,
                suggestions: payload
            }
        }

        case FIND_INFRASTRUCTURES_SUGGESTIONS:{
            return {
                ...state,
                infrastructures: payload
            }
        }
        
        case FIND_CURRENT_CONTAINER:{
            return {
                ...state,
                container: payload
            }
        }

        case FIND_RAILS_RESULTS:{
            return {
                ...state,
                rails: payload
            }
        }

        case FIND_CONTAINERS_RESULTS:{
            return {
                ...state,
                containers: payload
            }
        }

        case FIND_CONTAINERS_SUGGESTIONS:{
            return {
                ...state,
                suggestions: payload
            }
        }

        case RAIL_CREATE:{
            return {
                ...state,
            }
        }

        case RAIL_DELETE:{
            return{
                ...state,
            }
        }

        case RAIL_UPDATE:{
            return{
                ...state,
            }
        }

        case MICROCLIMATE_CREATE:{
            return {
                ...state,
            }
        }

        case MICROCLIMATE_DELETE:{
            return{
                ...state,
            }
        }

        case MICROCLIMATE_UPDATE:{
            return{
                ...state,
            }
        }

        case INFRASTRUCTURE_CREATE:{
            return {
                ...state,
            }
        }

        case INFRASTRUCTURE_DELETE:{
            return{
                ...state,
            }
        }

        case INFRASTRUCTURE_UPDATE:{
            return{
                ...state,
            }
        }

        case CONTAINER_ADD_IN_RAIL:{
            return{
                ...state,
            }
        }

        default:
            return state;
    }
}