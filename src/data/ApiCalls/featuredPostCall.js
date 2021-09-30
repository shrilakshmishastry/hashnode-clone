import axios from "axios";
import { api, queryConstructor } from "../../config/apis";

async function getFeaturedPostCall(page,type) {
    const url = api.root;
    
    try{
        const data = await axios({
            url: url,
            method: 'post',
            data:{
                query:queryConstructor,
                variables:{
                    page: page,
                    type: type
                }
            }
        });
        // console.log(data.data);
        return data;
    }catch(e){
        // console.log('error')
        // console.log(Object.getOwnPropertyNames(e));
        // console.log(e.response.data)
        return e;
    }
}

export default getFeaturedPostCall;