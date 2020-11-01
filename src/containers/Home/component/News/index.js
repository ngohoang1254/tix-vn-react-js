import React, { Component } from 'react'
import { getNews } from "../../../../actions/News";
import { connect } from "react-redux";
import NewsItem from '../newsItem';
class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            pageReviews : 0
        }
    }
    amountPageNews = () => {
        const { news } = this.props;
        const page = Math.ceil(news.length / 8);
        return page
    }
    amountPageReviews = () => {
        const { reviews } = this.props;
        const page = Math.ceil(reviews.length / 8);
        return page
    }
    componentDidMount() {
        this.props.getNews();
        this.props.getReviews();
    }
    paginationNews = (type) => {
        if (type == "news") {
            const { news } = this.props;
            const none = "none";
            const block = "block";
            // 8 news for 1 page
            let page = this.amountPageNews(this.news);
            var pageNews = [];
            // Pagination
            for (let i = 0; i < page; i++) {
                pageNews.push([]);
                for (let j = i * 8; j < (i + 1) * 8; j++) {
                    if (j < news.length) {
                        pageNews[i].push(news[j]);
                    }
                    else {
                        break;
                    }
                }
            }

            return pageNews.map((item, index) => {
                if (index <= this.state.page) {
                    return <NewsItem
                        key={index}
                        data={item}
                        display={block} />
                }
                else {
                    return <NewsItem
                        key={index}
                        data={item}
                        display={none} />
                }
            })
        }
        else {
            const { reviews } = this.props;
            const none = "none";
            const block = "block";
            // 8 news for 1 page
            let page = this.amountPageReviews();
            var pageNews = [];
            // Pagination
            for (let i = 0; i < page; i++) {
                pageNews.push([]);
                for (let j = i * 8; j < (i + 1) * 8; j++) {
                    if (j < reviews.length) {
                        pageNews[i].push(reviews[j]);
                    }
                    else {
                        break;
                    }
                }
            }

            return pageNews.map((item, index) => {
                if (index <= this.state.pageReviews) {
                    return <NewsItem
                        key={index}
                        data={item}
                        display={block} />
                }
                else {
                    return <NewsItem
                        key={index}
                        data={item}
                        display={none} />
                }
            })
        }

    }
    render() {
        // const { news } = this.props;
        // const page = Math.ceil(news.length / 8);
        // var pageNews = []
        // // pageNews[1].push(news[2]);
        // for (let i = 0; i < page; i++) {
        //     pageNews.push([]);
        //     for (let j = i * 8; j < (i + 1) * 8; j++) {
        //         if (j < news.length) {
        //             pageNews[i].push(news[j]);
        //         }
        //         else {
        //             break;
        //         }
        //     }
        // }
        // console.log(pageNews)

        return (
            <section className="news container" id="news">
                <div className="news__content">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#dienAnh24h" role="tab" aria-controls="home" aria-selected="true">Điện Ảnh 24h</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="profile-tab" data-toggle="tab" href="#review" role="tab" aria-controls="profile" aria-selected="false">Review</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="contact-tab" data-toggle="tab" href="#khuyenMai" role="tab" aria-controls="contact" aria-selected="false">Khuyến Mãi</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="newsTabContent">
                        <div className="tab-pane fade show active" id="dienAnh24h" role="tabpanel" aria-labelledby="home-tab">
                            {/* <NewsItem data={pageNews} /> */}
                            {this.paginationNews("news")}
                            <div className="row mb-4">
                                <div className="col-12">
                                    <div className="news_wrapSeeMore">
                                        <button className="news__seeMore mx-3" style={{ display: (this.state.page + 1 == this.amountPageNews()) ? "none" : "block" }} onClick={() => {
                                            this.setState({
                                                page: this.state.page + 1
                                            })
                                        }}>Xem thêm</button>
                                        <button className="news__seeMore mx-3" style={{ display: (this.state.page == 0) ? "none" : "block" }} onClick={() => {
                                            this.setState({
                                                page: this.state.page - 1
                                            })
                                        }}>Rút gọn</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade " id="review" role="tabpanel" aria-labelledby="home-tab">
                            {this.paginationNews("reviews")}
                            <div className="row mb-4">
                                <div className="col-12">
                                    <div className="news_wrapSeeMore">
                                        <button className="news__seeMore mx-3" style={{ display: (this.state.pageReviews + 1 == this.amountPageReviews()) ? "none" : "block" }} onClick={() => {
                                            this.setState({
                                                pageReviews: this.state.pageReviews + 1
                                            })
                                        }}>Xem thêm</button>
                                        <button className="news__seeMore mx-3" style={{ display: (this.state.pageReviews == 0) ? "none" : "block" }} onClick={() => {
                                            this.setState({
                                                pageReviews: this.state.pageReviews - 1
                                            })
                                        }}>Rút gọn</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="khuyenMai" role="tabpanel" aria-labelledby="home-tab">
                            <div className="row mb-4">
                                {/* 2 tin to */}
                                <div className="col-xl-6">
                                    <div className="news__item">
                                        <div className="news__img">
                                            <a href="#">
                                                <img src="./img/dien_anh_1.png" />
                                            </a>
                                        </div>
                                        <a href="#" className="news__title">
                                            Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt Christopher Nolan
              </a>
                                        <p>Làng phim đương đại những năm qua chứng kiến sự lên ngôi của cái tên Christopher Nolan, được
                                        biết tới như một trong những đạo diễn thiên tài với khả năng tạo ra siêu phẩm bạc tỉ
                chất lượng.</p>
                                        <div className="news__luotTT">
                                            <div className="news__icon">
                                                <i className="fa fa-thumbs-up" />
                                                <span>0</span>
                                            </div>
                                            <div className="news__icon">
                                                <i className="fa fa-comment-alt" />
                                                <span>0</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="news__item">
                                        <div className="news__img">
                                            <a href="#">
                                                <img src="./img/dien_anh_2.png" />
                                            </a>
                                        </div>
                                        <a href="#" className="news__title">
                                            Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt Christopher Nolan
              </a>
                                        <p>Làng phim đương đại những năm qua chứng kiến sự lên ngôi của cái tên Christopher Nolan, được
                                        biết tới như một trong những đạo diễn thiên tài với khả năng tạo ra siêu phẩm bạc tỉ
                chất lượng.</p>
                                        <div className="news__luotTT">
                                            <div className="news__icon">
                                                <i className="fa fa-thumbs-up" />
                                                <span>0</span>
                                            </div>
                                            <div className="news__icon">
                                                <i className="fa fa-comment-alt" />
                                                <span>0</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-4">
                                {/* 2 tin nhỏ ngang */}
                                <div className="col-xl-4">
                                    <div className="news__item">
                                        <div className="news__img">
                                            <a href="#">
                                                <img src="./img/dien_anh_3.png" />
                                            </a>
                                        </div>
                                        <a href="#" className="news__title">
                                            Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt Christopher Nolan
              </a>
                                        <p>Làng phim đương đại những năm qua chứng kiến sự lên ngôi của cái tên Christopher Nolan, được
                                        biết tới như một trong những đạo diễn thiên tài với khả năng tạo ra siêu phẩm bạc tỉ
                chất lượng.</p>
                                        <div className="news__luotTT">
                                            <div className="news__icon">
                                                <i className="fa fa-thumbs-up" />
                                                <span>0</span>
                                            </div>
                                            <div className="news__icon">
                                                <i className="fa fa-comment-alt" />
                                                <span>0</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4">
                                    <div className="news__item">
                                        <div className="news__img">
                                            <a href="#">
                                                <img src="./img/dien_anh_4.png" />
                                            </a>
                                        </div>
                                        <a href="#" className="news__title">
                                            Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt Christopher Nolan
              </a>
                                        <p>Làng phim đương đại những năm qua chứng kiến sự lên ngôi của cái tên Christopher Nolan, được
                                        biết tới như một trong những đạo diễn thiên tài với khả năng tạo ra siêu phẩm bạc tỉ
                chất lượng.</p>
                                        <div className="news__luotTT">
                                            <div className="news__icon">
                                                <i className="fa fa-thumbs-up" />
                                                <span>0</span>
                                            </div>
                                            <div className="news__icon">
                                                <i className="fa fa-comment-alt" />
                                                <span>0</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* 3 tin nhỏ dọc */}
                                <div className="col-xl-4">
                                    <div className="news__item">
                                        <div className="row">
                                            <div className="col-xl-3">
                                                <div className="news__img">
                                                    <a href="#">
                                                        <img src="./img/dien_anh_5.png" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-xl-9">
                                                <a href="#" className="news__title news__title-small">
                                                    Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt Christopher Nolan
                  </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="news__item">
                                        <div className="row">
                                            <div className="col-xl-3">
                                                <div className="news__img">
                                                    <a href="#">
                                                        <img src="./img/dien_anh_6.png" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-xl-9">
                                                <a href="#" className="news__title news__title-small">
                                                    Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt Christopher Nolan
                  </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="news__item">
                                        <div className="row">
                                            <div className="col-xl-3">
                                                <div className="news__img">
                                                    <a href="#">
                                                        <img src="./img/dien_anh_7.png" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-xl-9">
                                                <a href="#" className="news__title news__title-small">
                                                    Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt Christopher Nolan
                  </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="news__item">
                                        <div className="row">
                                            <div className="col-xl-3">
                                                <div className="news__img">
                                                    <a href="#">
                                                        <img src="./img/dien_anh_7.png" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-xl-9">
                                                <a href="#" className="news__title news__title-small">
                                                    Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt Christopher Nolan
                  </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-4">
                                <div className="col-12">
                                    <div className="news_wrapSeeMore">
                                        <button className="news__seeMore">Xem thêm</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}
const getStateToProps = (state) => {
    return {
        news: state.newsReducer.news,
        loading: state.newsReducer.loading,
        error: state.newsReducer.error,
        reviews: state.reviewReducer.data
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getNews: () => {
            dispatch(getNews("news"));
        },
        getReviews: () => {
            dispatch(getNews("reviews"));
        }
    }
}
export default connect(getStateToProps, mapDispatchToProps)(News);