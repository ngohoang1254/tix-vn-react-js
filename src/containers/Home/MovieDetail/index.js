import React, { Component } from 'react'

export default class MovieDetail extends Component {
    componentDidMount(){
        const {id} = this.props.match.params;
    }
    render() {
        return (
            <section className="checkout">
                <div className="checkout__process">
                    <div className="process__img">
                        <img src="./img/web-logo.png" />
                    </div>
                    <ul>
                        <li>
                            <span>01</span>
        CHỌN GHÉ &amp; THANH TOÁN
      </li>
                        <li>
                            <span>02</span>
        KẾT QUẢ ĐẶT VÉ
      </li>
                    </ul>
                    <div className="process__account">
                        <img src="./img/avatar.png" />
                        <span className="hoTen">Ngo Hoang</span>
                    </div>
                </div>
                {/* Seat selection */}
                <main className="row seat">
                    <div className="col-12 col-md-9">
                        <div className="seat__selection__blank">
                        </div>
                        <div className="seat__selection__top">
                            <div className="seat__selection__left">
                                <div className="img__movie">
                                    <img src="https://movie0706.cybersoft.edu.vn/hinhanh/ted-part-2_gp09.jpg" />
                                </div>
                                <div className="info__movie">
                                    <p>Ten rap</p>
                                    <p>Dia chi rap</p>
                                </div>
                            </div>
                            <div className="seat__selection__right">
                                <p>Thoi gian tam giu ghe</p>
                                <p>0:00</p>
                            </div>
                        </div>
                        <div className="seat__selection__map">
                            <div className="screen container">
                                <img src="./img/screen.png" />
                            </div>
                            <div className="listseat">
                                <div className="seat__row">
                                    <span className="rowName">A</span>
                                    <span className="seat__click">
                                        <input type="checkbox" id="A01" />
                                        <label htmlFor="A01">
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                </div>
                                <div className="seat__row">
                                    <span className="rowName">A</span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                </div>
                                <div className="seat__row">
                                    <span className="rowName">A</span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                </div>
                                <div className="seat__row">
                                    <span className="rowName">A</span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                </div>
                                <div className="seat__row">
                                    <span className="rowName">A</span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                </div>
                                <div className="seat__row">
                                    <span className="rowName">A</span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                </div>
                                <div className="seat__row">
                                    <span className="rowName">A</span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                </div>
                                <div className="seat__row">
                                    <span className="rowName">A</span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                </div>
                                <div className="seat__row">
                                    <span className="rowName">A</span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                    <span className="seat__click">
                                        <input type="checkbox" />
                                        <label>
                                            <span className="seatnum">A01</span>
                                        </label>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="seat__note">
                        </div>
                    </div>
                    <aside className="pay-section col-12 col-md-3">
                        <div className="pay-section-wrapper">
                            <div className="total">
                                <span id="totalMoney">
                                    0 VND
          </span>
                            </div>
                        </div>
                        <div className="pay-section-wrapper">
                            <div className="movieName">
                                <span>
                                    Movie Name
          </span>
                            </div>
                        </div>
                        <div className="pay-section-wrapper">
                            <div className="timeShowing">
                                <span>Ngay gio chieu</span>
                                <span>10/01/1997</span>
                            </div>
                        </div>
                        <div className="pay-section-wrapper">
                            <div className="groupCinema">
                                <span>Tên cụm rạp</span>
                                <span>Cụm rạp</span>
                            </div>
                        </div>
                        <div className="pay-section-wrapper">
                            <div className="groupCinema">
                                <span>Tên cụm rạp</span>
                                <span>Cụm rạp</span>
                            </div>
                        </div>
                        <div className="pay-section-wrapper">
                            <div className="groupCinema">
                                <span>Tên cụm rạp</span>
                                <span>Cụm rạp</span>
                            </div>
                        </div>
                        <div className="pay-section-wrapper">
                            <div className="groupCinema">
                                <span>Tên cụm rạp</span>
                                <span>Cụm rạp</span>
                            </div>
                        </div>
                        <div className="pay-section-wrapper">
                            <div className="groupCinema">
                                <span>Tên cụm rạp</span>
                                <span>Cụm rạp</span>
                            </div>
                        </div>
                        <div className="pay-section-wrapper">
                            <div className="groupCinema">
                                <span>Tên cụm rạp</span>
                                <span>Cụm rạp</span>
                            </div>
                        </div>
                        <div className="pay-section-wrapper">
                            <div className="groupCinema">
                                <span>Tên cụm rạp</span>
                                <span>Cụm rạp</span>
                            </div>
                        </div>
                    </aside>
                </main>
                {/* Pay Bill */}
            </section>

        )
    }
}
