import React, { Component } from 'react'
import Carousel from "../component/Carousel";
import Showing from "../component/Showing";
import moment from "moment";
import News from "../component/News";
import MovieApp from "../component/mobileApp";
import Footer from "../component/Footer";
import Calendar from "../component/Calendar";
import {connect} from "react-redux";
import Loader from "../../../components/Loader";
import {Route} from "react-router-dom";
 class HomePage extends Component {

    render() {
        console.log(this.props);
        // const now = moment().format("DD/MM/YYYY");
        // console.log(now);
        // const from = moment().subtract(7,'d').format("DD/MM/YYYY");
        // console.log(from);
        // var string1 = from.split("/").join("%2F");
        // console.log(string1);
        // var nowShowing = moment("2020-08-29T00:00:00".split("T")[0]).subtract(30,"d").format("YYYY/MM/DD");
        // var nowShowing1 = moment("2020-09-10T:00:00".split("T")[0]).subtract(30,"d").format("YYYY/MM/DD");
        // var lastMonth = moment().subtract(30,'d').format("YYYY/MM/DD")
        // // var today = day.split("T")[0];
        // console.log(lastMonth)
        // var now = moment().subtract(30,"d").format("YYYY/MM/DD");
        // // var today1 = moment().format("YYYY/MM/DD");
        // console.log(now);
        // console.log(nowShowing)
        // // console.log(now);
        // // console.log(today1);
        // // // console.log(today1>now);
        // const {loading,loading1,loading2,loading3,loading4,loading5} = this.props;
        // if(loading1||loading2||loading||loading3||loading4||loading5){
        //     return <Loader/>
        // }
        return (
            <div>
                <Carousel/>
                <Showing/>
                <Calendar/>
                <News/>
                <MovieApp/>
                <Footer/>
            </div>
        );
    }
}
// const mapStateToProps = (state) => {
//     return {
//         loading : state.movieReducer.loading,
//         loading1 : state.showing.loading,
//         loading2 : state.newsReducer.loading,
//         loading3 : state.reviewReducer.loading,
//         loading4 : state.cinemaReducer.loading,
//         loading5 : state.infoCinemaReducer.loading,
//     }
// }
export default(HomePage);