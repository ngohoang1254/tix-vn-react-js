import React, { Component } from 'react'

export default class CalendarMovie extends Component {
    renderListMovie = () => {
        const { data } = this.props;
        return data.danhSachPhim.map((item, index) => {
         
                return (
                    <div className="movie__item" key={index}>
                        <div className="row movie__info">
                            <div className="col-1">
                                <img src={item.hinhAnh} />
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
                        <hr />
                    </div>
                )
       
   
               
        })
    }
    render() {
        const { data, active } = this.props;

        if (active) {
            return (
                <div id={data.maCumRap} className="tab-pane fade in active">
                    {this.renderListMovie()}
                </div>
            )
        }
        else {
            return (
                <div id={data.maCumRap} className="tab-pane fade in">
                    {this.renderListMovie()}
                </div>
            )
        }
    }
}
