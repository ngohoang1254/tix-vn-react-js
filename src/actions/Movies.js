import React, { Component } from 'react'
import {GET_MOVIES_REQUEST,GET_MOVIES_FAILED,GET_MOVIES_SUCCESS} from "../constants/Movies";
import axios from "axios";
export const getMovies = () => {
    return (dispatch,getSTate) =>{
        dispatch({
            type : GET_MOVIES_REQUEST
        })
        const url = "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01";
        axios.get(url)
        .then((result)=>{
            dispatch({
                type : GET_MOVIES_SUCCESS,
                payload : result.data
            })
        })
        .catch((err) =>{
            dispatch({
                type : GET_MOVIES_FAILED,
                payload: err
            })
        })
    }
}
