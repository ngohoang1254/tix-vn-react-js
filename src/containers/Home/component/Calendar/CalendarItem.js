import React, { Component } from 'react'

export default class CalendarItem extends Component {

    render() {
        const urlImg = {
            BHDStar: "https://s3img.vcdn.vn/123phim/2018/09/bhd-star-bitexco-15379552241200.jpg",
            CGV : "https://s3img.vcdn.vn/123phim/2019/11/dcine-ben-thanh-15738149453578.png",
            CineStar: "https://s3img.vcdn.vn/123phim/2018/10/cinestar-hai-ba-trung-15383833704033.jpg",
            Galaxy: "https://s3img.vcdn.vn/123phim/2018/09/ddc-dong-da-15379624326697.jpg",
            LotteCinima: "https://s3img.vcdn.vn/123phim/2018/10/lotte-cinema-phu-tho-15383865322515.jpg",
            MegaGS : "https://s3img.vcdn.vn/123phim/2018/09/mega-gs-cao-thang-15380164745357.jpg",

        }
        const { diaChi, tenCumRap,active,maCumRap } = this.props;
        let tenCumRapSplit = tenCumRap.split("-")
        if(active){
            return(
                <li className = "active">
            {/* Address of Cinema  */}
            <div className="row cinema-item">
                <div className="cinema-info">
                  
                        <img src={urlImg.BHDStar} />

                    {/* Info of cinema */}
                    <div className="wrapInfo cinema__address">
                        <span>
                            <span><span className="cinema__name">{tenCumRapSplit[0]}</span>- {tenCumRapSplit[1]}</span>
                        </span>
                        <span className="info-movie">{diaChi}</span>
                        <a data-toggle="tab" href={"#"+maCumRap}>
                            <span>[Chi tiết]</span>
                        </a>
                    </div>
                </div>
            </div>
            <hr />
        </li>
            )
        }
        else{
        return (
            <li>
            {/* Address of Cinema  */}
            <div className="row cinema-item">
                <div className="cinema-info">
                  
                        <img src={urlImg.BHDStar} />

                    {/* Info of cinema */}
                    <div className="wrapInfo cinema__address">
                        <span>
                            <span><span className="cinema__name">{tenCumRapSplit[0]}</span>- {tenCumRapSplit[1]}</span>
                        </span>
                        <span className="info-movie">{diaChi}</span>
                        <a data-toggle="tab" href={"#"+maCumRap}>
                            <span>[Chi tiết]</span>
                        </a>
                    </div>
                </div>
            </div>
            <hr />
        </li>

        )
        }
    }
}
