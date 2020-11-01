import {
    GET_MOVIES_REQUEST,
    GET_MOVIES_SUCCESS,
    GET_MOVIES_FAILED,
  } from "../constants/Movies";
const initialState = {
    movieList : [],
    loading : false,
    err : null
}
export const movieReducer = (state = initialState,action) =>{
    switch(action.type){
        case GET_MOVIES_REQUEST:{
            return {...state, loading : true, error : null}
        }
        case GET_MOVIES_SUCCESS:{
          
            return {...state,loading : false,movieList : action.payload }
        }
        case GET_MOVIES_FAILED : {
            return {...state,loading:false,err : action.payload}
        }
        default:
            return {...state}
    }
}
