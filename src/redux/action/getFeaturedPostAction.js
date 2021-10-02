import getFeaturedPostCall from "../../data/ApiCalls/featuredPostCall";
import { createActionType} from "../action-type";

function getFeaturedPostAction(type,feedtype) {
    const {initial,success,failure} = createActionType(type);

    return async function(dispatch,page) {
        dispatch({
            type: initial,
        })
       const result = await getFeaturedPostCall(page,feedtype);

       if(result && result.response ){
        dispatch({
            type: failure
        });
       }else{
           dispatch({
               type:success,
               payload:{
                   data:result.data.data.storiesFeed
               }
           });
       }
       return true;
    }
}

function flushData(type) {
    const {flush} = createActionType(type);
    console.log(flush)
    return function(dispatch) {
        dispatch({
            type:flush,
        });
    }
}

export {
    getFeaturedPostAction,
    flushData
};