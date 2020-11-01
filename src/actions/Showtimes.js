import {SHOW_TIMES_FAILED,SHOW_TIMES_REQUEST,SHOW_TIMES_SUCCESS} from "../constants/Showtimes"
import axios from "axios";


export const getShowTime = () => {
    return(dispatch,getState) => {
        dispatch({
            type : SHOW_TIMES_REQUEST
        })
        

        const url = "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP09";

        axios.get(url)
        .then((result) => {
            dispatch({
                type : SHOW_TIMES_SUCCESS,
                payload : result.data
            })
        })
        .catch((err) => {
            dispatch({
                type : SHOW_TIMES_FAILED,
                payload : err
            })
        })
    }
}