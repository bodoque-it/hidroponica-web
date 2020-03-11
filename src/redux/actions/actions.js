export const FIND_RAILS_SUGGESTIONS = 'FIND_RAILS_SUGGESTIONS';
export const FIND_CYCLES_SUGGESTIONS = 'FIND_CYCLES_SUGGESTIONS';
export const FIND_MICROCLIMATES_SUGGESTIONS = 'FIND_MICROCLIMATES_SUGGESTIONS';
export const FIND_CONTAINERS_RESULTS = 'FIND_CONTAINERS_RESULTS';
export const FIND_CURRENT_CONTAINER = 'FIND_CURRENT_CONTAINER';
export const FIND_RAILS_RESULTS = 'FIND_RAILS_RESULTS';
export const RAIL_CREATE = 'RAIL_CREATE';
export const RAIL_DELETE = 'RAIL_DELETE';
export const RAIL_UPDATE = 'RAIL_UPDATE';

export function findRailsSuggestions(text) {
    return {
        type: FIND_RAILS_SUGGESTIONS,
        payload: text,
    }
}

export function findCyclesSuggestions(text) {
    return {
        type: FIND_CYCLES_SUGGESTIONS,
        payload: text,
    }
}

export function findMicroclimatesSuggestions(text) {
    return {
        type: FIND_MICROCLIMATES_SUGGESTIONS,
        payload: text,
    }
}

export function findContainersResults(rail){
    return {
        type: FIND_CONTAINERS_RESULTS,
        payload: rail,
    }
}

export function findCurrentContainer(id_container){
    return {
        type: FIND_CURRENT_CONTAINER,
        payload: id_container,
    }
}

export function findRailsResults(id_user){
    return {
        type: FIND_RAILS_RESULTS,
        payload: id_user,
    }
}

export function railCreate(){
    return {
        type: RAIL_CREATE,
        
    }
}

export function railDelete(id_rail){
    return{
        type: RAIL_DELETE,
        payload: id_rail,
    }
}

export function railUpdate(id_rail){
    return{
        type: RAIL_UPDATE,
        payload: id_rail,
    }
}