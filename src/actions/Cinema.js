import {GET_CINEMA_FAILED,GET_CINEMA_SUCCESS,GET_CINEMA_REQUEST} from "../constants/Cinema"
import axios from "axios";
export const getCinema = () => {
    return (dispatch,getState) => {
        dispatch({
            type : GET_CINEMA_REQUEST
        })
        const url = "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap";
        axios.get(url)
        .then((result) =>{
            dispatch({
                type : GET_CINEMA_SUCCESS,
                payload : result.data
            })
        })
        .catch((err) => {
            dispatch({
                type : GET_CINEMA_FAILED,
                payload : err
            })
        })
    }
}