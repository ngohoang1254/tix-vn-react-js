import React, { Component } from 'react'
import { connect } from "react-redux";
import { getMovies } from "../../../../actions/Movies";

class Carousel extends Component {
    renderCarousel = () => {
        const movieList = this.props.movieList.slice(1, 4);
        return movieList.map((item, index) => {
            if (index == 0) {
                return (
                    <div className="carousel-item active" key={item.maPhim} >
                        <img className="img-fluid" src="https://s3img.vcdn.vn/123phim/2020/10/tiec-trang-mau-blood-moon-party-16021267739246.png" className="d-block w-100" />
                    </div>
                )
            }
            else {
                return (
                    <div className="carousel-item" key={item.maPhim}>
                        <img className="img-fluid" src="https://s3img.vcdn.vn/123phim/2020/09/rom-c18-16008300686919.png" className="d-block w-100" />
                    </div>
                )
            }
        })
    }
    componentDidMount() {
        this.props.getMovies();
    }
    render() {
       
    
        return (
            <section className="carousel__movie">
                <div className="carousel__content">
                    <div id="movieCarousel" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#movieCarousel" data-slide-to={0} className="active" />
                            <li data-target="#movieCarousel" data-slide-to={1} />
                            <li data-target="#movieCarousel" data-slide-to={2} />
                        </ol>
                        <div className="carousel-inner">
                            {this.renderCarousel()}
                            {/* <div className="carousel-item active">
                                <img src="./img/cau-be-nguoi-go-15961359597877.jpg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="./img/ban-dao-15954792351353.jpg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="./img/ban-dao-15954792351353.jpg" className="d-block w-100" alt="..." />
                            </div> */}
                        </div>
                        <a className="carousel-control-prev" href="#movieCarousel" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#movieCarousel" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                <div className="carousel__text">
                    <a href="#"><i className="fa fa-play" /></a>
                </div>

            </section>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        movieList: state.movieReducer.movieList,
        loading: state.movieReducer.loading,
        err: state.movieReducer.err,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getMovies: (data) => {
            dispatch(getMovies(data))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Carousel);
