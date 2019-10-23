export const FIND_SUGGESTIONS = 'FIND_SUGGESTIONS';
export const FIND_CONTAINERS_RESULTS = 'FIND_CONTAINERS_RESULTS';
export const FIND_CURRENT_CONTAINER = 'FIND_CURRENT_CONTAINER';
export const FIND_RAILS_RESULTS = 'FIND_RAILS_RESULTS';

export function findSuggestions(text) {
    return {
        type: FIND_SUGGESTIONS,
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