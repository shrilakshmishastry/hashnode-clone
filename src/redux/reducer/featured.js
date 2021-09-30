import { createActionType, GET_FEATURED_POST_ACTION, GET_RECENT_POST_ACTION, GET_RELEVANT_POST_ACTION } from "../action-type";

const initialState = {
    featuredPosts:[],
    recentPosts: [],
    relaventPosts:[],
    loading: false
};

const featuredPost = createActionType(GET_FEATURED_POST_ACTION);
const recentPost =  createActionType(GET_RECENT_POST_ACTION)
const relaventPost = createActionType(GET_RELEVANT_POST_ACTION);


export default function featured(state = initialState,action) {
    console.log(action);
    switch(action.type){
        case(featuredPost.initial):{
            const newPost = {...state};
            newPost.loading = true;
            return newPost;
        }
        case(featuredPost.success):{
            const newPost = {...state};
            newPost.loading = false;
            newPost.featuredPosts = [...state.featuredPosts,...action.payload.data]

            return newPost;
        }
        case(featuredPost.failure):{
            const newPost = {...state};
            newPost.loading = false;
            return newPost;
        }
        case(recentPost.initial):{
            const newPost = {...state};
            newPost.loading = true;
            return newPost;
        }
        case(recentPost.success):{

            const newPost = {...state};
            newPost.loading = false;

            newPost.recentPosts = [...state.recentPosts,...action.payload.data]

            return newPost;
        }
        case(featuredPost.failure):{
            const newPost = {...state};
            newPost.loading = false;
            return newPost;
        }
        case(relaventPost.initial):{
            const newPost = {...state};
            newPost.loading = true;
            return newPost;
        }
        case(relaventPost.success):{

            const newPost = {...state};
            newPost.loading = false;
            newPost.relaventPosts = [...state.relaventPosts,...action.payload.data]
            console.log(newPost.relaventPosts);
            return newPost;
        }
        case(relaventPost.failure):{
            const newPost = {...state};
            newPost.loading = false;
            return newPost;
        }

        default:{
            return state;
        }
    }
}