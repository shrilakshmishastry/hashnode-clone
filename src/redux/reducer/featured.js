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

    switch(action.type){
        case(featuredPost.initial):{
            const newPost = {...state};
            newPost.loading = true;
            return newPost;
        }
        case(featuredPost.success):{
            const newPost = {...state};
            newPost.loading = false;
            let featuredPost =
            state.featuredPosts.length >0 ? action.payload.data.filter((item,index) => {

                return state.featuredPosts[index].cuid != item.cuid
            })
            : [...action.payload.data];
            newPost.featuredPosts = [...state.featuredPosts,...featuredPost];
            return newPost;
        }
        case(featuredPost.failure):{
            const newPost = {...state};
            newPost.loading = false;
            return newPost;
        }
        case(featuredPost.flush):{
            const newPost = {...state};
            newPost.featuredPosts =[];
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
            let recentPost = state.recentPosts.length >0 ? action.payload.data.filter((item,index) => {

                return state.recentPosts[index].cuid != item.cuid
            })
            : [...action.payload.data];

            newPost.recentPosts = [...state.recentPosts,...recentPost];

            return newPost;
        }
        case(recentPost.failure):{
            const newPost = {...state};
            newPost.loading = false;
            return newPost;
        }
        case(recentPost.flush):{
            const newPost = {...state};
            newPost.recentPosts =[];
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
            let relaventPost =  state.relaventPosts.length >0 ? action.payload.data.filter((item,index) => {

                return state.relaventPosts[index].cuid != item.cuid
            })
            : [...action.payload.data];
            newPost.relaventPosts = [...state.relaventPosts,...relaventPost];

            return newPost;
        }
        case(relaventPost.failure):{
            const newPost = {...state};
            newPost.loading = false;
            return newPost;
        }
        case(relaventPost.flush):{
            const newPost = {...state};
            newPost.relaventPosts =[];
            return newPost;
        }

        default:{
            return state;
        }
    }
}