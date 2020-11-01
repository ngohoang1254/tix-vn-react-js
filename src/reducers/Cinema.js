import {GET_CINEMA_REQUEST,GET_CINEMA_SUCCESS,GET_CINEMA_FAILED} from "../constants/Cinema";
let initialState = {
    data : [],
    loading : false,
    error : null
}
export const cinemaReducer = (state = initialState,action) => {
    switch(action.type){
        case GET_CINEMA_REQUEST:
            return {...state,loading : true}
        case GET_CINEMA_SUCCESS:
            return {...state, loading : false, data : action.payload}
        case GET_CINEMA_FAILED:
            return {...state,loading : false, error : action.payload}
        default: 
            return {...state}
    }
}