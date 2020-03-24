export const FIND_COUNTS_SUGGESTIONS = 'FIND_COUNTS_SUGGESTIONS';
export const FIND_CONTAINER_COUNT_SUGGESTIONS = 'FIND_CONTAINER_COUNT_SUGGESTIONS';
export const FIND_RAILS_SUGGESTIONS = 'FIND_RAILS_SUGGESTIONS';
export const FIND_CONTAINERS_SUGGESTIONS = 'FIND_CONTAINERS_SUGGESTIONS';
export const FIND_CYCLES_SUGGESTIONS = 'FIND_CYCLES_SUGGESTIONS';
export const FIND_MICROCLIMATES_SUGGESTIONS = 'FIND_MICROCLIMATES_SUGGESTIONS';
export const FIND_INFRASTRUCTURES_SUGGESTIONS = 'FIND_INFRASTRUCTURES_SUGGESTIONS';
export const FIND_CONTAINERS_RESULTS = 'FIND_CONTAINERS_RESULTS';
export const FIND_CURRENT_CONTAINER = 'FIND_CURRENT_CONTAINER';
export const FIND_RAILS_RESULTS = 'FIND_RAILS_RESULTS';
export const FIND_AVALAIBLE_SUGGESTIONS = 'FIND_AVALAIBLE_SUGGESTIONS';
export const RAIL_CREATE = 'RAIL_CREATE';
export const RAIL_DELETE = 'RAIL_DELETE';
export const RAIL_UPDATE = 'RAIL_UPDATE';
export const CONTAINER_CREATE = 'CONTAINER_CREATE';
export const CONTAINER_DELETE = 'CONTAINER_DELETE';
export const CONTAINER_UPDATE = 'CONTAINER_UPDATE';
export const MICROCLIMATE_CREATE = 'MICROCLIMATE_CREATE';
export const MICROCLIMATE_DELETE = 'MICROCLIMATE_DELETE';
export const MICROCLIMATE_UPDATE = 'MICROCLIMATE_UPDATE';
export const INFRASTRUCTURE_CREATE = 'INFRASTRUCTURE_CREATE';
export const INFRASTRUCTURE_DELETE = 'INFRASTRUCTURE_DELETE';
export const INFRASTRUCTURE_UPDATE = 'INFRASTRUCTURE_UPDATE';
export const CONTAINER_ADD_IN_RAIL = 'CONTAINER_ADD_IN_RAIL';
export const CYCLE_CREATE = 'CYCLE_CREATE';
export const CYCLE_DELETE = 'CYCLE_DELETE';
export const CYCLE_UPDATE = 'CYCLE_UPDATE';

export function findCountsSuggestions(text){
    return {
        type: FIND_COUNTS_SUGGESTIONS,
        payload: text,
    }
}
export function findContainerCountSuggestions(text){
    return {
        type: FIND_CONTAINER_COUNT_SUGGESTIONS,
        payload: text,
    }
}

export function findRailsSuggestions(text) {
    return {
        type: FIND_RAILS_SUGGESTIONS,
        payload: text,
    }
}

export function findContainersSuggestions(text) {
    return {
        type: FIND_CONTAINERS_SUGGESTIONS,
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

export function findInfrastructuresSuggestions(text) {
    return {
        type: FIND_INFRASTRUCTURES_SUGGESTIONS,
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

export function findAvalaibleSuggestions(text) {
    return {
        type: FIND_AVALAIBLE_SUGGESTIONS,
        payload: text,
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

export function microclimateCreate(){
    return {
        type: MICROCLIMATE_CREATE,
        
    }
}

export function microclimateDelete(id_microclimate){
    return{
        type: MICROCLIMATE_DELETE,
        payload: id_microclimate,
    }
}

export function microclimateUpdate(id_microclimate){
    return{
        type: MICROCLIMATE_UPDATE,
        payload: id_microclimate,
    }
}

export function containerCreate(){
    return {
        type: CONTAINER_CREATE,
        
    }
}

export function containerDelete(id_container){
    return{
        type: CONTAINER_DELETE,
        payload: id_container,
    }
}

export function containerUpdate(id_container){
    return{
        type: CONTAINER_UPDATE,
        payload: id_container,
    }
}

export function infrastructureCreate(){
    return {
        type: INFRASTRUCTURE_CREATE,
        
    }
}

export function infrastructureDelete(id_infrastructure){
    return{
        type: INFRASTRUCTURE_DELETE,
        payload: id_infrastructure,
    }
}

export function infrastructureUpdate(id_infrastructure){
    return{
        type: INFRASTRUCTURE_UPDATE,
        payload: id_infrastructure,
    }
}

export function containerAddInRail(){
    return{
        type: CONTAINER_ADD_IN_RAIL,
    }
}

export function cycleCreate(){
    return {
        type: CYCLE_CREATE,
        
    }
}

export function cycleDelete(id_cycle){
    return{
        type: CYCLE_DELETE,
        payload: id_cycle,
    }
}

export function cycleUpdate(id_cycle){
    return{
        type: CYCLE_UPDATE,
        payload: id_cycle,
    }
}
