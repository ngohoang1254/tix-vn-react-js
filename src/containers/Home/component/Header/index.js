import React, { Component } from 'react'
export default class Header extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="#">
                        <img src="img/web-logo.png"  />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="header__center">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#showing">Lịch chiếu <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#calendar">Cụm rạp</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#news">Tin tức</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#movieApp">Ứng dụng</a>
                                </li>
                            </ul>
                        </div>
                        <div className="header__right">
                            <span>
                                <img src="./img/avatar.png"/>
                                <p>Đăng nhập</p>
                                <i className="fa fa-map-marker-alt" />
                                <select className="form-control" id="exampleFormControlSelect1">
                                    <option>Hồ Chí Minh</option>
                                    <option>Hà Nội</option>
                                    <option>Đà Nẵng</option>
                                    <option>Nha Trang</option>
                                    <option>Cà Mau</option>
                                </select>
                            </span>
                        </div>
                    </div>
                </nav>
            </header>

        )
    }
}
