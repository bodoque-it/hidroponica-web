import { 
        FIND_COUNTS_SUGGESTIONS,
        FIND_CONTAINER_COUNT_SUGGESTIONS,
        FIND_RAILS_SUGGESTIONS,
        FIND_RAILS_RESULTS, 
        FIND_CURRENT_CONTAINER,
        FIND_CONTAINERS_RESULTS,
        FIND_CYCLES_SUGGESTIONS,
        FIND_MICROCLIMATES_SUGGESTIONS,
        FIND_INFRASTRUCTURES_SUGGESTIONS ,
        FIND_CONTAINERS_SUGGESTIONS,
        FIND_AVAILABLE_SUGGESTIONS,
        RAIL_CREATE,RAIL_DELETE,
        RAIL_UPDATE,
        MICROCLIMATE_CREATE,
        MICROCLIMATE_DELETE,
        MICROCLIMATE_UPDATE,
        INFRASTRUCTURE_CREATE,
        INFRASTRUCTURE_DELETE,
        INFRASTRUCTURE_UPDATE,
        CYCLE_CREATE,
        CYCLE_DELETE,
        CYCLE_UPDATE,
        CONTAINER_ADD_IN_RAIL,
        LOGIN_ERROR,
        LOGIN_SUCCESS,
        LOGOUT_ERROR,
        LOGOUT_SUCCESS
} from '../actions/actions';
         
const defaultState = {
    suggestions: [],
    infrastructures: [],
    containers: [],
    cycles: [],
    container: {},
    rails: [],
    authError: null,
    token: 'null',
    logged: false
}

export function rootReducer(state = defaultState, {type,payload}) {
    switch (type) {
        case LOGIN_ERROR:{
            console.log("Login error")
            return{
                ...state,
                authError: 'Login failed'
            }
        }
        case LOGIN_SUCCESS:{
            localStorage.setItem( "token",payload )
            return{
                ...state,
                authError: null,
                logged: true
            }
        }
        case LOGOUT_ERROR:{
            console.log("Logout error")
            return{
                ...state,
                authError: 'Logout failed'
            }
        }
        case LOGOUT_SUCCESS:{
            localStorage.setItem( "token",payload )
            return{
                ...state,
                authError: null,
                logged: false
            }
        }
        case FIND_CONTAINER_COUNT_SUGGESTIONS:{
            return {
                ...state,
                suggestions: payload
            }
        }
        case FIND_AVAILABLE_SUGGESTIONS:{
            return {
                ...state,
                suggestions: payload
            }
        }
        case FIND_COUNTS_SUGGESTIONS:{
            return {
                ...state,
                suggestions: payload
            }
        }
        case FIND_RAILS_SUGGESTIONS:{
            
            return {
                ...state,
                suggestions: payload
            }
        }

        case FIND_CYCLES_SUGGESTIONS:{
            console.log(payload)
            return {
                ...state,
                cycles: payload
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

        case CYCLE_CREATE:{
            return {
                ...state,
            }
        }

        case CYCLE_DELETE:{
            return{
                ...state,
            }
        }

        case CYCLE_UPDATE:{
            return{
                ...state,
            }
        }

        default:
            return state;
    }
}