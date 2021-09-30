export const GET_RELEVANT_POST_ACTION = "GET_RELEVANT_POST";
export const GET_FEATURED_POST_ACTION = "GET_FEATURED_POST";
export const GET_RECENT_POST_ACTION = "GET_RECENT_POST";


export function createActionType(type) {
    return{
        initial: type,
        success: `${type}__SUCCESS`,
        failure: `${type}_FAILURE`
    };
}