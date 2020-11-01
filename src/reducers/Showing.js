// let initialState = {
//     lichChieuPhim: [],
//     loading: false,
//     err: null,
// }
// export const showTimeReducer = (state = initialState, action) => {
//     switch (action.type) {
//         default:
//             return { ...state }
//     }
// }
import moment from "moment";
import {SHOW_TIMES_REQUEST,SHOW_TIMES_FAILED,SHOW_TIMES_SUCCESS} from "../constants/Showtimes";
let initialState = {
    movieList  : [
        // nowShowing: [],
        // commingSoon: [],
    ],
    loading : false,
    err : null,
}
const compareDate = (ngayKhoiChieu) =>{
    let day = moment((ngayKhoiChieu).split("T")[0]).format("YYYY/MM/DD");
    let today = moment().format("YYYY/MM/DD");
    let lastMonth = moment().subtract(30,"d").format("YYYY/MM/DD");
    // commingSoon
    if(day>today){
        return true;
    }
    // nowShowing
    else if(day < today && day > lastMonth){
        return false;
    }
}
export const showing = (state =  initialState,action) => {
    switch(action.type){
        case SHOW_TIMES_REQUEST:
            return {...state,loading : true}
        case SHOW_TIMES_SUCCESS:{
            // let nowShowing = [];
            // let commingSoon = [];
            // action.payload.map((item)=>{
            //     if(compareDate(item.ngayKhoiChieu)){
            //         commingSoon.append(item);
            //     }
            //     else{
            //         nowShowing.append(item)
            //     } 
            // })
            // action.payload.map((item) => {
            //     if(compareDate(item.ngayKhoiChieu)){
            //         state.movieList.commingSoon = item;
            //     }
            //     else{
            //         state.movieList.nowShowing = item;
            //     }
            // })
            return {...state,loading : false,movieList : action.payload}
        }
        case SHOW_TIMES_FAILED: 
            return {...state,loading : false, err : action.payload};
        default: 
            return {...state};
    }
}