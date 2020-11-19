import Axios from "axios";
import {GET_INFO_CINEMA_FAILED,GET_INFO_CINEMA_SUCCESS,GET_INFO_CINEMA_REQUEST} from "../constants/InfoCinema";
export const getInfoCinema = () =>{
    return (dispatch,getState) => {
        dispatch({
            type : GET_INFO_CINEMA_REQUEST
        })
        const url = "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP09";

        Axios.get(url)
        .then((result)=>{
            dispatch({
                type : GET_INFO_CINEMA_SUCCESS,
                payload : result.data
            })
        })
        .catch((error) => {
            dispatch({
                type : GET_INFO_CINEMA_FAILED,
                payload : error
            })
        })
    }
}