import { FIND_SUGGESTIONS, FIND_RAILS_RESULTS, FIND_CURRENT_CONTAINER, FIND_CONTAINERS_RESULTS } from '../actions/actions';

const defaultState = {
    suggestions: [],
    containers: [],
    container: {},
    rails: [],
}

export function rootReducer(state = defaultState, {type,payload}) {
    switch (type) {
        case FIND_SUGGESTIONS:{
            console.log(payload)
            return {
                ...state,
                suggestions: payload
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

        default:
            return state;
    }
}