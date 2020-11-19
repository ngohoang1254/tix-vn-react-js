import React, { Component } from 'react'

export default class MovieItem extends Component {
    render() {
        return (
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
        )
    }
}
