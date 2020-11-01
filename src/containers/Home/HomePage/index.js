import React, { Component } from 'react'
import Carousel from "../component/Carousel";
import Showing from "../component/Showing";
import moment from "moment";
import News from "../component/News";
import MovieApp from "../component/mobileApp";
import Footer from "../component/Footer";
import Calendar from "../component/Calendar";
export default class HomePage extends Component {
    render() {
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
        // // console.log(today1>now);
        return (
            <div>
                <Carousel/>
                <Showing/>
                <Calendar/>
                <News/>
                <MovieApp/>
                <Footer/>
            </div>
        )
    }
}
