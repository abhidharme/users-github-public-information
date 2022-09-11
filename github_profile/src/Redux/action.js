import * as Types from "./actionTypes";
import axios from "axios";

const fetch_user_request = ()=>({
    type: Types.FETCH_USER_PROFILE_SUCCESS
});

const fetch_user_Success = (payload)=> ({
    type: Types.FETCH_USER_PROFILE_SUCCESS,
    payload
});

const fetch_user_failure = ()=>({
    type:Types.FETCH_USER_PROFILE_FAILURE
});

export const fetch_user_profile = (username) => (dispatch)=>{
    dispatch(fetch_user_request());
    axios.get(`https://api.github.com/users/${username}`)
    .then((res)=>dispatch(fetch_user_Success(res.data)))
    .then((res)=>console.log(res.data))
    .catch((err)=>dispatch(fetch_user_failure('err.message')))
}