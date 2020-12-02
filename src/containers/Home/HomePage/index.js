import React, { Component } from 'react'
import Carousel from "../component/Carousel";
import Showing from "../component/Showing";
import moment from "moment";
import News from "../component/News";
import MovieApp from "../component/mobileApp";
import Footer from "../component/Footer";
import Calendar from "../component/Calendar";
import { connect } from "react-redux";
import Loader from "../../../components/Loader";
import { Route, withRouter } from "react-router-dom";
class HomePage extends Component {

    render() {
        console.log(this.props);
        return (
            <div>
                <Carousel />
                <Showing />
                <Calendar />
                <News />
                <MovieApp />
                <Footer />
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
export default (HomePage);