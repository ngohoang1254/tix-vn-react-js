import React, { Component } from 'react'
import { actFetchMovieDetail } from './modules/actions';
import { connect } from "react-redux";
import Loader from "../../../components/Loader/index"
class MovieDetail extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchMovieDetail(id);
    }
    showCinema(data) {
        let a = [];
        data.lichChieu.map((item) => {
            if (!(a.includes(item.thongTinRap.maHeThongRap))) {
                a.push(item.thongTinRap.maHeThongRap)
                console.log(a)
            }
            else {
            }
        })
        return a;
    }
    render() {
        const { data } = this.props;
        console.log(data);
        let listRap = [];
        if (!data) {
            return <Loader></Loader>
        }
        else {
            var { danhGia } = this.props.data
            var darkOff = parseFloat(440/100*((10-parseInt(danhGia))*10));
            console.log(darkOff)
            listRap = this.showCinema(data);
            console.log(listRap)

            return (
                <>
                    <section className="movie-info">
                        <div className="movie__carousel">
                            <div className="carousel__img">
                                {data && <img src={data.hinhAnh} />}
                            </div>
                        </div>
                        <div className="movie__detail">
                            <div className="row">
                                <div className="movie__thumbnail col-3">
                                    <div className="moive__thumbnail__img">
                                        {data && <img src={data.hinhAnh} />}
                                    </div>
                                </div>
                                <div className="col-6 movie__detail__info">
                                    <div className="row">
                                        <div className="col-9 col-md-12">
                                            {data && <p>{data.ngayKhoiChieu.split("T")[0]}</p>}
                                            <p>
                                                <span className="doTuoi">C13 </span>
                                                {data && <span className="title">{data.tenPhim}</span>}
                                            </p>
                                            <p>
                                                2D Digital
              </p>
                                            <button className="btnBuyTicket">Mua ve</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-2 percentage">
                                    <svg>
                                        <circle cx={70} cy={70} r={70} />
                                        <circle cx={70} cy={70} r={70} style={{ strokeDashoffset: darkOff  }} />
                                    </svg>
                                    <div className="number">
                                        <h2>{danhGia}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="booking__calendar">
                        <div className="booking__header">
                            <ul className="nav nav-tabs navCenter">
                                <li className="active"><a data-toggle="tab" className="active show" href="#lichchieu">Lịch chiếu</a></li>
                                <li><a data-toggle="tab" href="#thongtin">Thông tin</a></li>
                                <li><a data-toggle="tab" href="#danhgia">Đánh giá</a></li>
                            </ul>
                        </div>
                        <div className="tab-content">
                            <div id="lichchieu" className="tab-pane fade active in show container">
                                <div className="row">
                                    <div className="col-3 cinemaLogo">
                                        <ul className="nav nav-tabs flex-column">
                                            <li>
                                                <a data-toggle="tab" href="#cgv-calendar" className="active show">
                                                    <div className="cinema__logo__item">
                                                        <img src="https://s3img.vcdn.vn/123phim/2018/09/ee621ee05dcd4565caead4f29421b41e.png" className="img-fluid" alt />
                                                        <span className="cinemLogoName">CGV Cinema</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li><a data-toggle="tab" href="#bhd-calendar">
                                                <div className="cinema__logo__item">
                                                    <img src="https://s3img.vcdn.vn/123phim/2018/09/f32670fd0eb083c9c4c804f0f3a252ed.png" className="img-fluid" alt />
                                                    <span className="cinemLogoName">BHD</span>
                                                </div>
                                            </a></li>
                                            <li><a data-toggle="tab" href="#galaxy-calendar">
                                                <div className="cinema__logo__item">
                                                    <img src="https://s3img.vcdn.vn/123phim/2018/09/e520781386bd5436e94d6e15e193a005.png" className="img-fluid" alt />
                                                    <span className="cinemaLogoName">GALAXY CINEMA</span>
                                                </div>
                                            </a></li>
                                            <li><a data-toggle="tab" href="#cinestar-calendar">
                                                <div className="cinema__logo__item">
                                                    <img src="https://movie0706.cybersoft.edu.vn/hinhanh/cinestar.png" className="img-fluid" alt />
                                                    <span className="cinemLogoName">CINESTAR</span>
                                                </div>
                                            </a></li>
                                            <li><a data-toggle="tab" href="#lotte-calendar">
                                                <div className="cinema__logo__item">
                                                    <img src="https://movie0706.cybersoft.edu.vn/hinhanh/lotte-cinema.png" className="img-fluid" alt />
                                                    <span className="cinemLogoName">LOTTE CINEMA</span>
                                                </div>
                                            </a></li>
                                        </ul>
                                    </div>
                                    <div className="col-9 bookingContent">
                                        <div className="tab-content">
                                            <div id="cgv-calendar" className="tab-pane fade active in show">
                                                <ul className="nav nav-tabs date">
                                                    <li className="nav-item"><a data-toggle="tab" href="#cgv-calendar-day-1">
                                                        <p className="dayOfWeek">Thứ 3</p>
                                                        <p className="dayOfMonth">01</p>
                                                    </a></li><a data-toggle="tab" href="#cgv-calendar-day-1">
                                                    </a><li><a data-toggle="tab" href="#cgv-calendar-day-1" /><a data-toggle="tab" href="#cgv-calendar-day-2">
                                                        <p className="dayOfWeek">Thứ 4</p>
                                                        <p className="dayOfMonth">02</p>
                                                    </a></li>
                                                </ul>
                                                <div className="booking__info">
                                                    <div className="tab-content">
                                                        <div id="cgv-calendar-day-1" className="tab-pane fade in active show">
                                                            <div className="booking__cinema">
                                                                <a data-toggle="collapse" href="#demo">
                                                                    <div className="booking__cinema__item" data-toogle="collapse" data-target="#demo">
                                                                        <img src="./img/bhd-star-bitexco-15379552241200.jpg" />
                                                                        <span className="tenChiNhanh">
                                                                            BHD Star <span>- Phạm Hùng</span>
                                                                        </span>
                                                                        <div id="demo" className="collapse row">
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
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div id="cgv-calendar-day-2" className="tab-pane fade in">
                                                            Haha
                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="bhd-calendar" className="tab-pane fade in">
                                                <ul className="nav nav-tabs date">
                                                    <li className="nav-item"><a data-toggle="tab" href="#bhd-calendar-day-1" className="nav-link active">
                                                        <p>Thứ 3</p>
                                                        <p>01</p>
                                                    </a></li><a data-toggle="tab" href="#bhd-calendar-day-1" className="nav-link active">
                                                    </a><li><a data-toggle="tab" href="#bhd-calendar-day-1" className="nav-link active" /><a data-toggle="tab" href="#bhd-calendar-day-2">
                                                        <p>Thứ 4</p>
                                                        <p>02</p>
                                                    </a></li>
                                                </ul>
                                                <div className="row booking__info">
                                                    <div className="tab-content">
                                                        <div id="cgv-calendar-day-1" className="tab-pane fade in active show">
                                                            <div className="booking__cinema__detail">
                                                            </div>
                                                        </div>
                                                        <div id="cgv-calendar-day-2" className="tab-pane fade in">
                                                            Haha
                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="thongtin" className="tab-pane fade in ">
                                haha
      </div>
                        </div>
                    </section>
                </>

            )
        }
    } F
}
const mapStateToProps = (state) => {
    return {
        loading: state.movieDetailReducer.loading,
        data: state.movieDetailReducer.data,
        err: state.movieDetailReducer.err,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovieDetail: (id) => {
            dispatch(actFetchMovieDetail(id));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
