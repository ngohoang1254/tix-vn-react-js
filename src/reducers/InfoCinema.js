import {GET_INFO_CINEMA_FAILED,GET_INFO_CINEMA_SUCCESS,GET_INFO_CINEMA_REQUEST} from "../constants/InfoCinema";
let initialState = {
    data : [],
    loading : false,
    error : null
}
export const infoCinemaReducer = (state = initialState,action) =>{
    switch(action.type){
        case GET_INFO_CINEMA_REQUEST:
            return {...state,loading : true}
        case GET_INFO_CINEMA_SUCCESS:
            return {...state,loading : false, data : action.payload}
        case GET_INFO_CINEMA_FAILED:
            return {...state,loading : false, error : action.payload}
        default : 
            return {...state}
    }
}