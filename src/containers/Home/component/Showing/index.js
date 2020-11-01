import React, { Component } from 'react'
import Slider from "react-slick";
import { getShowTime } from '../../../../actions/Showtimes';
import { connect } from "react-redux";
import ShowingItem from "../showingItem";
import moment from "moment";

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        />
    );
}
class Showing extends Component {
    componentDidMount() {
        this.props.getShowing();
    }

    compareDate = (ngayKhoiChieu) => {
        let day = moment((ngayKhoiChieu).split("T")[0]).format("YYYY/MM/DD");
        let today = moment().format("YYYY/MM/DD");
        let lastMonth = moment().subtract(120, "d").format("YYYY/MM/DD");
        // commingSoon
        if (day > today) {
            return true;
        }
        // nowShowing
        else if (day < today && day > lastMonth) {
            return false;
        }
    }
    renderShowing = (showing) => {

        const { movieList } = this.props;
        let nowShowing = [];

        if (showing == true) {
            movieList.map((item) => {
                if (this.compareDate(item.ngayKhoiChieu) == false) {
                    nowShowing.push(item)

                }
            })

            return nowShowing.map((item) => {
                return <ShowingItem
                    key={item.maPhim}
                    data={item}
                />
            })
        }
        else {
            movieList.map((item) => {
                if (this.compareDate(item.ngayKhoiChieu)) {
                    nowShowing.push(item)
                    console.log(item.ngayKhoiChieu)
                }
            })

            return nowShowing.map((item) => {
                return <ShowingItem
                    key={item.maPhim}
                    data={item}
                />
            })
        }
    }
    settingSlick = (length) => {
        let setting = {}
        if (length > 4) {
            return setting = {
                rows: 2,
                slidesToShow: 4,
                infinite: true,
                slidesToScroll: 4,
            }
        }
        else{
            return setting = {
                rows: 2,
                slidesToShow: 4,
                infinite: false,
                slidesToScroll: 4,
            }
        }
    }
    render() {
        const lengthShowing = this.renderShowing(true).length;
        const lengthComming = this.renderShowing(false).length;

        let setting = {
            rows: 2,
            slidesToShow: 4,
            infinite: true,
            slidesToScroll: 4,

            // slidesToScroll: 4,
            // responsive: [
            // {

            //     breakpoint: 960,
            //     settings: {
            //         rows: 1,
            //         slidesToShow: 2,
            //         slidesToScroll: 2
            //     }
            // },
            // {
            //     breakpoint: 600,
            //     settings: {
            //         rows: 1,
            //         slidesToShow: 1,
            //         slidesToScroll: 1
            //     }
            // },
            // {
            //     breakpoint: 480,
            //     settings: {
            //         rows: 1,
            //         slidesToShow: 1,
            //         slidesToScroll: 1
            //     }
            // }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
            // ]
        }


        return (
            <section className="showing">
                <div className="showing__content container">
                    <div className="showing__header">
                        <ul className="nav nav-tabs navCenter" id="myTab">
                            <li className="active"><a data-toggle="tab" className="active show" href="#showing">Đang chiếu</a></li>
                            <li><a data-toggle="tab" href="#comming">Sắp chiếu</a></li>
                        </ul>
                    </div>
                    <div className="tab-content">
                        <div id="showing" className=" tab-pane active fade in showing__content__item show">
                            <i className="fa fa-angle-left prev"/>
                            <i className="fa fa-angle-right next" />
                            <Slider {...this.settingSlick(this.renderShowing(true).length)} className=" showing__item container-fluid">
                                {this.renderShowing(true)}
                            </Slider>
                        </div>
                        <div id="comming" className="tab-pane fade  in showing__content__item">
                            <i className="fa fa-angle-left prev" />
                            <i className="fa fa-angle-right next" />
                            <Slider {...this.settingSlick(this.renderShowing(true).false)} className=" showing__item container-fluid">
                                {this.renderShowing(false)}

                            </Slider>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        movieList: state.showing.movieList,
        loading: state.showing.loading,
        err: state.showing.err,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getShowing: () => {
            dispatch(getShowTime());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Showing);