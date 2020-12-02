import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
class ShowingItem extends Component {
    render() {
        const { data } = this.props;

        return (
            <div className="item">
                <div className="item__image">
                    <img className="img-fluid" src={data.hinhAnh} />
                    <a href="#"><i className="fa fa-play" />
                    </a>
                    <div className="item__overlay" />
                </div>
                <div className="showing__info">
                    <span className="type__showing">C18</span>
                    <span>{data.tenPhim} </span>
                    <div className="showing__booking">
                        {/* <a href="">
                            <h3>Mua vé</h3>
                        </a> */}
                        <button
                            
                            onClick={() => this.props.history.push(`/movie/${data.maPhim}`)}
                        >
                            Chi tiết
          </button>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(ShowingItem);