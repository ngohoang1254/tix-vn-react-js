import {GET_REVIEWS_FAILED,GET_REVIEWS_REQUEST,GET_REVIEWS_SUCCESS} from "../constants/Reviews"
let initialState = {
    data : [],
    loading : false,
    error : null
}
export const reviewReducer = (state = initialState,action) => {
    switch(action.type){
        case GET_REVIEWS_REQUEST:
            return {...state, loading : true}
        case GET_REVIEWS_SUCCESS:
            return {...state, data : action.payload,loading : false}
        case GET_REVIEWS_FAILED:
            return {...state, error : action.payload, loading : false}
        default : 
            return {...state}
    }
}