import React, { Component } from 'react';
import { connect } from "react-redux";
import { getCinema } from "../../../../actions/Cinema";
import { getInfoCinema } from '../../../../actions/InfoCinema';
import CalendarItem from './CalendarItem';
import CalendarMovie from "./CalendarMovie";
class Calendar extends Component {
    componentDidMount() {
        this.props.getCinema();
        this.props.getInfoCinema();


    }
    renderListMovie = (maHeThongRap) => {
        const { infoCinema } = this.props;
        return infoCinema.map((item) => {
            if (item.maHeThongRap == maHeThongRap) {
                return item.lstCumRap.map((item, index) => {
                    if(index == 0){
                    return (
                        <CalendarMovie
                            key={item.maCumRap}
                            data={item}
                            active = {true}
                        />)
                    }
                    else{
                        return(
                            <CalendarMovie
                            key={item.maCumRap}
                            data={item}
                            active = {false}
                        />
                        )
                    }
                })
            }
        })
    }
    renderListCinema = () => {
        const { infoCinema } = this.props;
        return infoCinema.map((item, index) => {
            if (index == 0) {
                return (
                    <div key={item.maHeThongRap} id={item.maHeThongRap} className="tab-pane fade in active">
                        <div className="row">
                            <div className="col-4 cinema__about">
                                <ul className="nav nav-tabs flex-column">
                                    {this.renderInfoCinema(item.maHeThongRap)}
                                </ul>
                            </div>
                            <div className="col-8 movie__column">
                                <div className="tab-content">
                                    {this.renderListMovie(item.maHeThongRap)}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            else {
                return (
                    <div key={item.maHeThongRap} id={item.maHeThongRap} className="tab-pane fade in">
                        <div className="row">
                            <div className="col-4 cinema__about">
                                <ul className="nav nav-tabs flex-column">
                                    {this.renderInfoCinema(item.maHeThongRap)}
                                </ul>
                            </div>
                            <div className="col-8 movie__column">
                                <div className="tab-content">
                                    {this.renderListMovie(item.maHeThongRap)}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        })
    }
    renderInfoMovie = (maHeThongRap) => {
        const { infoCinema } = this.props;
        return infoCinema.map((item, index) => {
            if (item.maHeThongRap == maHeThongRap) {
                return item.lstCumRap.map((item, index) => {

                })
            }
        })
    }
    renderInfoCinema = (maHeThongRap) => {
        const { infoCinema } = this.props;
        return infoCinema.map((item) => {
            if (item.maHeThongRap == maHeThongRap) {
                return item.lstCumRap.map((item, index) => {
                    if (index == 0) {
                        return (<CalendarItem
                            key={item.maCumRap}
                            diaChi={item.diaChi}
                            tenCumRap={item.tenCumRap}
                            active={true}
                            maCumRap={item.maCumRap}
                        />
                        )
                    }
                    else {
                        return (
                            <CalendarItem
                                key={item.maCumRap}
                                diaChi={item.diaChi}
                                tenCumRap={item.tenCumRap}
                                active={false}
                                maCumRap={item.maCumRap}
                            />
                        )
                    }
                })
            }
        })
    }
    renderCinemaLogo = () => {
        const { cinema } = this.props;
        return cinema.map((item, index) => {
            if (index == 0) {
                return (
                    <li className="active" key={item.maHeThongRap}><a data-toggle="tab" href={"#" + item.maHeThongRap}>
                        <img src={item.logo} className="img-fluid" />
                        <hr />
                    </a>
                    </li>
                )
            }
            else {
                return (
                    <li key={item.maHeThongRap}><a data-toggle="tab" href={"#" + item.maHeThongRap}>
                        <img src={item.logo} className="img-fluid" />
                        <hr />
                    </a></li>
                )
            }

        })
    }
    render() {
        //   const {infoCinema} = this.props;
        //     return infoCinema.map((item,index)=>{
        //         if(item.maHeThongRap == "BHDStar"){
        //             return item.lstCumRap.map((item,index)=>{
        //                 console.log(item)
        //             })
        //         }
        //     })

        return (
            <section className="calendar container" id="calendar">
                <div className="calendar__content container">
                    <div className="row ">
                        <div className="col-1">
                            <ul className="nav nav-tabs flex-column cinemaName">
                                {this.renderCinemaLogo()}
                                {/* <li className="active"><a data-toggle="tab" href="#cgv">
                                    <img src="https://s3img.vcdn.vn/123phim/2018/09/ee621ee05dcd4565caead4f29421b41e.png" className="img-fluid" />
                                    <hr />
                                </a>
                                </li>
                                <li><a data-toggle="tab" href="#bhd">
                                    <img src="https://s3img.vcdn.vn/123phim/2018/09/f32670fd0eb083c9c4c804f0f3a252ed.png" className="img-fluid" />
                                    <hr />
                                </a></li>
                                <li><a data-toggle="tab" href="#menu2">
                                    <img src="https://s3img.vcdn.vn/123phim/2018/09/e520781386bd5436e94d6e15e193a005.png" className="img-fluid" />
                                    <hr />
                                </a></li>
                                <li><a data-toggle="tab" href="#menu3">
                                    <img src="https://s3img.vcdn.vn/123phim/2018/09/9b240f96a233bb43203ee514a21a6004.png" className="img-fluid" />
                                    <hr />
                                </a></li>
                                <li><a data-toggle="tab" href="#menu4">
                                    <img src="https://s3img.vcdn.vn/123phim/2018/09/7b078639bd8fdb09dd83652d207c7b90.png" className="img-fluid" />
                                    <hr />
                                </a></li>
                                <li><a data-toggle="tab" href="#menu5">
                                    <img src="https://s3img.vcdn.vn/123phim/2019/10/9ff07a03371c4a09260309faa32caa55.jpg" className="img-fluid" />
                                    <hr />
                                </a></li>
                                <li><a data-toggle="tab" href="#menu6">
                                    <img src="https://s3img.vcdn.vn/123phim/2018/09/404b8c4b80d77732e7426cdb7e24be20.png" className="img-fluid" />
                                    <hr />
                                </a></li>
                                <li><a data-toggle="tab" href="#menu7">
                                    <img src="https://s3img.vcdn.vn/123phim/2018/09/1721cfa98768f300c03792e25ceb0191.png" className="img-fluid" />
                                    <hr />
                                </a></li> */}
                            </ul>
                        </div>

                        {/* column 2 and 3 */}
                        <div className="col-11 cinemaAddress">
                            <div className="tab-content">
                                {/* First item row in address  */}

                                {/* <div id="BHDStar" className="tab-pane fade in active">
                                    <div className="row">
                                        <div className="col-4 cinema__about">
                                            <ul className="nav nav-tabs flex-column">
                                                {this.renderInfoCinema()}
                                            </ul>
                                        </div>
                                    </div>
                                </div> */}
                                {this.renderListCinema()}
                                <div id="bhd" className="tab-pane fade in">
                                    <div className="row">
                                        {/* List of address columns */}
                                        <div className="col-4 cinema__about">
                                            <ul className="nav nav-tabs flex-column">
                                                <li className="active">
                                                    {/* Address of Cinema  */}
                                                    <div className="row cinema-item">
                                                        <div className="cinema-info">
                                                            <div className="col-4">
                                                                <img src="https://s3img.vcdn.vn/123phim/2018/09/cgv-vincom-go-vap-15380174906047.jpg" />
                                                            </div>
                                                            {/* Info of cinema */}
                                                            <div className="col-8 cinema__address">
                                                                <span>CGV - Vincom Gò Vấp </span>
                                                                <span className="info-movie">Tầng 4-5, Saigonres Plaza, 79/81 Nguyễn Xí, P 26, Q Bình
                            Thạnh</span>
                                                                <a data-toggle="tab" href="#bhd-movie">
                                                                    <span>[Chi tiết]</span>
                                                                </a>
                                                            </div>
                                                            <hr />
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="active">
                                                    {/* Address of Cinema  */}
                                                    <div className="row cinema-item">
                                                        <div className="cinema-info">
                                                            <div className="col-4">
                                                                <img src="https://s3img.vcdn.vn/123phim/2018/09/cgv-vincom-go-vap-15380174906047.jpg" />
                                                            </div>
                                                            {/* Info of cinema */}
                                                            <div className="col-8 cinema__address">
                                                                <span>CGV - Vincom Gò Vấp </span>
                                                                <span className="info-movie">Tầng 4-5, Saigonres Plaza, 79/81 Nguyễn Xí, P 26, Q Bình
                            Thạnh</span>
                                                                <a data-toggle="tab" href="#bhd-movie">
                                                                    <span>[Chi tiết]</span>
                                                                </a>
                                                            </div>
                                                            <hr />
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="active">
                                                    {/* Address of Cinema  */}
                                                    <div className="row cinema-item">
                                                        <div className="cinema-info">
                                                            <div className="col-4">
                                                                <img src="https://s3img.vcdn.vn/123phim/2018/09/cgv-vincom-go-vap-15380174906047.jpg" />
                                                            </div>
                                                            {/* Info of cinema */}
                                                            <div className="col-8 cinema__address">
                                                                <span>CGV - Vincom Gò Vấp </span>
                                                                <span className="info-movie">Tầng 4-5, Saigonres Plaza, 79/81 Nguyễn Xí, P 26, Q Bình
                            Thạnh</span>
                                                                <a data-toggle="tab" href="#bdh-movie">
                                                                    <span>[Chi tiết]</span>
                                                                </a>
                                                            </div>
                                                            <hr />
                                                        </div>
                                                    </div>
                                                </li>
                                                {/* <li><a data-toggle="tab" href="#menu12">Menu 1</a></li>
                      <li><a data-toggle="tab" href="#menu23">Menu 2</a></li> */}
                                            </ul>
                                        </div>
                                        {/* Third column */}
                                        <div className="col-8 movie__column">
                                            <div className="tab-content">
                                                <div id="bhd-movie" className="tab-pane fade in active">
                                                    <div className="movie__item">
                                                        <div className="row movie__info">
                                                            <div className="col-1">
                                                                <img src="https://s3img.vcdn.vn/mobile/123phim/2016/11/danh-cap-giac-mo-inception-14794516242347_60x60.jpg" />
                                                            </div>
                                                            <div className="col-10 movie__name">
                                                                <span className="type__showing">C16</span>
                                                                <span>Đánh cắp giấc mơ - Inception</span>
                                                                <a href="#">
                                                                    <p>148 phút - TIX 7.9 - IMDb 8.8</p>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="movie__session">
                                                            <p>2D Digital
                            </p>
                                                            <div className="row movie__time">
                                                                <div className="col-3">
                                                                    <span><span className="start-time">14:40</span> ~ 17:08</span>
                                                                </div>
                                                                <div className="col-3">
                                                                    <span><span className="start-time">14:40</span> ~ 17:08</span>
                                                                </div>
                                                                <div className="col-3">
                                                                    <span><span className="start-time">14:40</span> ~ 17:08</span>
                                                                </div>
                                                                <div className="col-3">
                                                                    <span><span className="start-time">14:40</span> ~ 17:08</span>
                                                                </div>
                                                                <div className="col-3">
                                                                    <span><span className="start-time">14:40</span> ~ 17:08</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="movie__item">
                                                        <div className="row movie__info">
                                                            <div className="col-1">
                                                                <img src="https://s3img.vcdn.vn/mobile/123phim/2020/08/ca-sau-tu-than-black-water-abyss-c18-15964423012362_60x60.png" />
                                                            </div>
                                                            <div className="col-10 movie__name">
                                                                <span className="type__showing">C16</span>
                                                                <span>Đánh cắp giấc mơ - Inception</span>
                                                                <a href="#">
                                                                    <p>148 phút - TIX 7.9 - IMDb 8.8</p>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="movie__session">
                                                            <p>2D Digital
                            </p>
                                                            <div className="row movie__time">
                                                                <div className="col-3">
                                                                    <span><span className="start-time">14:40</span> ~ 17:08</span>
                                                                </div>
                                                                <div className="col-3">
                                                                    <span><span className="start-time">14:40</span> ~ 17:08</span>
                                                                </div>
                                                                <div className="col-3">
                                                                    <span><span className="start-time">14:40</span> ~ 17:08</span>
                                                                </div>
                                                                <div className="col-3">
                                                                    <span><span className="start-time">14:40</span> ~ 17:08</span>
                                                                </div>
                                                                <div className="col-3">
                                                                    <span><span className="start-time">14:40</span> ~ 17:08</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="movie__item">
                                                        <div className="row movie__info">
                                                            <div className="col-1">
                                                                <img src="https://s3img.vcdn.vn/mobile/123phim/2016/11/danh-cap-giac-mo-inception-14794516242347_60x60.jpg" />
                                                            </div>
                                                            <div className="col-10 movie__name">
                                                                <span className="type__showing">C16</span>
                                                                <span>Đánh cắp giấc mơ - Inception</span>
                                                                <a href="#">
                                                                    <p>148 phút - TIX 7.9 - IMDb 8.8</p>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="movie__session">
                                                            <p>2D Digital
                            </p>
                                                            <div className="row movie__time">
                                                                <div className="col-3">
                                                                    <span><span className="start-time">14:40</span> ~ 17:08</span>
                                                                </div>
                                                                <div className="col-3">
                                                                    <span><span className="start-time">14:40</span> ~ 17:08</span>
                                                                </div>
                                                                <div className="col-3">
                                                                    <span><span className="start-time">14:40</span> ~ 17:08</span>
                                                                </div>
                                                                <div className="col-3">
                                                                    <span><span className="start-time">14:40</span> ~ 17:08</span>
                                                                </div>
                                                                <div className="col-3">
                                                                    <span><span className="start-time">14:40</span> ~ 17:08</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="movie__item">
                                                        <div className="row movie__info">
                                                            <div className="col-1">
                                                                <img src="https://s3img.vcdn.vn/mobile/123phim/2016/11/danh-cap-giac-mo-inception-14794516242347_60x60.jpg" />
                                                            </div>
                                                            <div className="col-10 movie__name">
                                                                <span className="type__showing">C16</span>
                                                                <span>Đánh cắp giấc mơ - Inception</span>
                                                                <a href="#">
                                                                    <p>148 phút - TIX 7.9 - IMDb 8.8</p>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="movie__session">
                                                            <p>2D Digital
                            </p>
                                                            <div className="row movie__time">
                                                                <div className="col-3">
                                                                    <span><span className="start-time">14:40</span> ~ 17:08</span>
                                                                </div>
                                                                <div className="col-3">
                                                                    <span><span className="start-time">14:40</span> ~ 17:08</span>
                                                                </div>
                                                                <div className="col-3">
                                                                    <span><span className="start-time">14:40</span> ~ 17:08</span>
                                                                </div>
                                                                <div className="col-3">
                                                                    <span><span className="start-time">14:40</span> ~ 17:08</span>
                                                                </div>
                                                                <div className="col-3">
                                                                    <span><span className="start-time">14:40</span> ~ 17:08</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="movie__item">
                                                        <div className="row movie__info">
                                                            <div className="col-1">
                                                                <img src="https://s3img.vcdn.vn/mobile/123phim/2016/11/danh-cap-giac-mo-inception-14794516242347_60x60.jpg" />
                                                            </div>
                                                            <div className="col-10 movie__name">
                                                                <span className="type__showing">C16</span>
                                                                <span>Đánh cắp giấc mơ - Inception</span>
                                                                <a href="#">
                                                                    <p>148 phút - TIX 7.9 - IMDb 8.8</p>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="movie__session">
                                                            <p>2D Digital
                            </p>
                                                            <div className="row movie__time">
                                                                <div className="col-3">
                                                                    <span><span className="start-time">14:40</span> ~ 17:08</span>
                                                                </div>
                                                                <div className="col-3">
                                                                    <span><span className="start-time">14:40</span> ~ 17:08</span>
                                                                </div>
                                                                <div className="col-3">
                                                                    <span><span className="start-time">14:40</span> ~ 17:08</span>
                                                                </div>
                                                                <div className="col-3">
                                                                    <span><span className="start-time">14:40</span> ~ 17:08</span>
                                                                </div>
                                                                <div className="col-3">
                                                                    <span><span className="start-time">14:40</span> ~ 17:08</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="movie__item">
                                                        <div className="row movie__info">
                                                            <div className="col-1">
                                                                <img src="https://s3img.vcdn.vn/mobile/123phim/2016/11/danh-cap-giac-mo-inception-14794516242347_60x60.jpg" />
                                                            </div>
                                                            <div className="col-10 movie__name">
                                                                <span className="type__showing">C16</span>
                                                                <span>Đánh cắp giấc mơ - Inception</span>
                                                                <a href="#">
                                                                    <p>148 phút - TIX 7.9 - IMDb 8.8</p>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="movie__session">
                                                            <p>2D Digital
                            </p>
                                                            <div className="row movie__time">
                                                                <div className="col-3">
                                                                    <span><span className="start-time">14:40</span> ~ 17:08</span>
                                                                </div>
                                                                <div className="col-3">
                                                                    <span><span className="start-time">14:40</span> ~ 17:08</span>
                                                                </div>
                                                                <div className="col-3">
                                                                    <span><span className="start-time">14:40</span> ~ 17:08</span>
                                                                </div>
                                                                <div className="col-3">
                                                                    <span><span className="start-time">14:40</span> ~ 17:08</span>
                                                                </div>
                                                                <div className="col-3">
                                                                    <span><span className="start-time">14:40</span> ~ 17:08</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div></section>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        cinema: state.cinemaReducer.data,
        loading: state.cinemaReducer.loading,
        error: state.cinemaReducer.error,
        infoCinema: state.infoCinemaReducer.data
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getCinema: () => {
            dispatch(getCinema());
        },
        getInfoCinema: () => {
            dispatch(getInfoCinema());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Calendar);

