import {GET_NEWS_FAILED,GET_NEWS_SUCCESS,GET_NEWS_REQUEST} from "../constants/News";
let initialState = {
    news : [],
    loading : false,
    error : null
}
export const newsReducer = (state = initialState, action) =>{
    switch(action.type){
        case GET_NEWS_REQUEST:
            return {...state, loading : true};
        case GET_NEWS_SUCCESS:
            return  {...state,loading : false, news : action.payload}
        case GET_NEWS_FAILED:
            return {...state, loading : false, error : action.payload}
        default : 
            return {...state};
    }
}