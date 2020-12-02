import React, { Component } from 'react';
import Slider from "react-slick";
function nextArrow(){
    return (
        <div style ={{display : "none"}}></div>
    )
}
export default class MovieApp extends Component {
 
    render() {
        const seeting = {
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            prevArrow: <nextArrow/>,
            nextArrow:<nextArrow/>,
            
        }
        return (
            <section className="movieApp" id="movieApp">
                {/* Ứng dụng tiện lợi dành cho người yêu điện ảnh */}
                <div className="movie__app  container-fluid">
                    <div className="mainMaxWidth container">
                        <div className="row ">
                            <div className="col-12 col-md-6">
                                <p className="textLeft">Ứng dụng tiện lợi dành cho</p>
                                <p className="textLeft">người yêu điện ảnh</p>
                                <p>Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi quà hấp dẫn.
          </p>
                                <button className="buttonLeft">App miễn phí - Tải về ngay!</button>
                                <p className="textAppUnder">TIX có hai phiên bản <a href="#">Android</a> &amp; <a href="#">IOS</a>
                                </p>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="right-content">
                                    <img className="img-fluid phone__img" src="./img/mobile.png"   />
                                    <Slider {...seeting} className="movie__phone">
                                        <div className="item">
                                            <img src="./img/slide7.jpg"   />
                                        </div>
                                        <div className="item">
                                            <img src="./img/slide8.jpg"   />
                                        </div>
                                        <div className="item">
                                            <img src="./img/slide9.jpg"   />
                                        </div>
                                        <div className="item">
                                            <img src="./img/slide10.jpg"   />
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}
