import {
    MOVIE_DETAIL_FAILED,
    MOVIE_DETAIL_REQUEST,
    MOVIE_DETAIL_SUCCESS
}
from "./constants";
import Axios from "axios";
export const actFetchMovieDetail = (id) =>{
    return (dispatch) =>{
        dispatch({
            type : MOVIE_DETAIL_REQUEST
        })
        const url = "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim="+id;
        Axios.get(url)
        .then((result)=>{
            dispatch({
                type : MOVIE_DETAIL_SUCCESS,
                payload : result.data
            })
        })
        .catch((err) =>{
            dispatch({
                type : MOVIE_DETAIL_FAILED,
                payload : err
            })
        })
    }
}
