import {
    MOVIE_DETAIL_FAILED,
    MOVIE_DETAIL_SUCCESS,
    MOVIE_DETAIL_REQUEST
} from "./constants";
let initialState = {
    loading : false,
    data : null,
    err : null
}
const movieDetailReducer = (state = initialState,action) =>{
    switch(action.type){
        case MOVIE_DETAIL_REQUEST:
            return {...state, loading : true}
        case MOVIE_DETAIL_SUCCESS:
            return {...state, loading : false, data : action.payload}
        case MOVIE_DETAIL_FAILED:
            return {...state, loading : false, err : action.payload}
        default : 
            return {...state}
    }
}
export default movieDetailReducer;