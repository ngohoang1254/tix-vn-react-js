import {GET_NEWS_FAILED,GET_NEWS_REQUEST,GET_NEWS_SUCCESS} from "../constants/News"
import axios from "axios";
import {GET_REVIEWS_FAILED,GET_REVIEWS_REQUEST,GET_REVIEWS_SUCCESS} from "../constants/Reviews";
export const getNews = (type) => {
    if(type == "news"){
    return (dispatch,getState) => {
        
        dispatch({
            type : GET_NEWS_REQUEST
        })
        const url = "https://5eea03dfb13d0a00164e40ad.mockapi.io/api/dienanh";
        axios.get(url)
        .then((result) => {
            dispatch({
                type : GET_NEWS_SUCCESS,
                payload : result.data
            })
        })
        .catch((error) => {
            dispatch({
                type : GET_NEWS_FAILED,
                payload : error
            })
        })
    }
}
    else{
        return (dispatch,getState) => {
        
            dispatch({
                type : GET_REVIEWS_REQUEST
            })
            const url = "https://5eea03dfb13d0a00164e40ad.mockapi.io/api/review";
            axios.get(url)
            .then((result) => {
                dispatch({
                    type : GET_REVIEWS_SUCCESS,
                    payload : result.data
                })
            })
            .catch((error) => {
                dispatch({
                    type : GET_REVIEWS_FAILED,
                    payload : error
                })
            })
        }
    }
}