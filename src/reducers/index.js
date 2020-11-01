import {combineReducers} from "redux";
import {movieReducer} from "./movies";
import {showing} from "./Showing";
import {newsReducer} from "./news";
import {reviewReducer} from "./Reviews";
import {cinemaReducer} from "./Cinema";
const rootReducer = combineReducers({
    movieReducer,
    showing,
    newsReducer,
    reviewReducer,
    cinemaReducer
})
export default rootReducer;