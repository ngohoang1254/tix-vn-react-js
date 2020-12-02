import {combineReducers} from "redux";
import {movieReducer} from "./movies";
import {showing} from "./Showing";
import {newsReducer} from "./news";
import {reviewReducer} from "./Reviews";
import {cinemaReducer} from "./Cinema";
import {infoCinemaReducer} from "./InfoCinema";
import movieDetailReducer from "../containers/Home/MovieDetail/modules/reducer"
const rootReducer = combineReducers({
    movieReducer,
    showing,
    newsReducer,
    reviewReducer,
    cinemaReducer,
    movieDetailReducer,
    infoCinemaReducer,
    
})
export default rootReducer;