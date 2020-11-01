import React, { Component } from 'react'

export default class NewsItem extends Component {
    renderHTML() {
        let dataModel = {
            link : "",
            tieuDe : "",
            comment : "",
            like : "",
            noiDung : "",
        };
        const { data, display } = this.props;
        for(let i = 0; i < 8; i++){
            if(!data[i]){
                data[i] = dataModel;
            }
        }
        return (
            <div style={{ display: display }}>
                <div className="row mb-4">
                    {/* 2 tin to */}
                    <div className="col-xl-6">
                        <div className="news__item" style={{ display: data[0].id ? 'block' : 'none' }}>
                            <div className="news__img">
                                <a href="#">
                                    <img src={data[0].hinhAnh}  />
                                </a>
                            </div>
                            <a href={data[0].link} className="news__title">
                                {data[0].tieuDe}
                            </a>
                            <p>{data[0].noiDung}</p>
                            <div className="news__luotTT">
                                <div className="news__icon">
                                    <i className="fa fa-thumbs-up" />
                                    <span>{data[0].like}</span>
                                </div>
                                <div className="news__icon">
                                    <i className="fa fa-comment-alt" />
                                    <span>{data[0].comment}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="news__item" style={{ display: data[1].id ? 'block' : 'none' }}>
                            <div className="news__img">
                                <a href="#">
                                    <img src={data[1].hinhAnh}  />
                                </a>
                            </div>
                            <a href={data[1].link} className="news__title">
                                {data[1].tieuDe}
                            </a>
                            <p>{data[1].noiDung}</p>
                            <div className="news__luotTT">
                                <div className="news__icon">
                                    <i className="fa fa-thumbs-up" />
                                    <span>{data[1].like}</span>
                                </div>
                                <div className="news__icon">
                                    <i className="fa fa-comment-alt" />
                                    <span>{data[1].comment}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-4">
                    {/* 2 tin nhỏ ngang */}
                    <div className="col-xl-4">
                        <div className="news__item" style={{ display: data[2].id ? 'block' : 'none' }}>
                            <div className="news__img">
                                <a href={data[2].link}>
                                    <img src={data[2].hinhAnh}  />
                                </a>
                            </div>
                            <a href={data[2].link} className="news__title">
                                {data[2].tieuDe}
                            </a>
                            <p>{data[2].noiDung}</p>
                            <div className="news__luotTT">
                                <div className="news__icon">
                                    <i className="fa fa-thumbs-up" />
                                    <span>{data[2].like}</span>
                                </div>
                                <div className="news__icon">
                                    <i className="fa fa-comment-alt" />
                                    <span>{data[2].comment}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="news__item" style={{ display: data[3].id ? 'block' : 'none' }}>
                            <div className="news__img">
                                <a href={data[3].link}>
                                    <img src={data[3].hinhAnh}  />
                                </a>
                            </div>
                            <a href={data[3].link} className="news__title">
                                {data[3].tieuDe}
                            </a>
                            <p>{data[3].noiDung}</p>
                            <div className="news__luotTT">
                                <div className="news__icon">
                                    <i className="fa fa-thumbs-up" />
                                    <span>{data[3].like}</span>
                                </div>
                                <div className="news__icon">
                                    <i className="fa fa-comment-alt" />
                                    <span>{data[3].comment}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 3 tin nhỏ dọc */}
                    <div className="col-xl-4">
                        <div className="news__item" style={{ display: data[4].id ? 'block' : 'none' }}>
                            <div className="row">
                                <div className="col-xl-3">
                                    <div className="news__img">
                                        <a href={data[4].link}>
                                            <img src={data[4].hinhAnh}  />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xl-9">
                                    <a href={data[4].link} className="news__title news__title-small">
                                       {data[4].tieuDe}
    </a>
                                </div>
                            </div>
                        </div>
                        <div className="news__item" style={{ display: data[5].id ? 'block' : 'none' }}>
                            <div className="row">
                                <div className="col-xl-3">
                                    <div className="news__img">
                                        <a href={data[5].link}>
                                            <img src={data[5].hinhAnh}  />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xl-9">
                                    <a href={data[5].link} className="news__title news__title-small">
                                       {data[5].tieuDe}
    </a>
                                </div>
                            </div>
                        </div>
                        <div className="news__item" style={{ display: data[6].id ? 'block' : 'none' }}>
                            <div className="row">
                                <div className="col-xl-3">
                                    <div className="news__img">
                                        <a href={data[6].link}>
                                            <img src={data[6].hinhAnh}  />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xl-9">
                                    <a href={data[6].link} className="news__title news__title-small">
                                       {data[6].tieuDe}
    </a>
                                </div>
                            </div>
                        </div>
                        <div className="news__item" style={{ display: data[7].id ? 'block' : 'none' }}>
                            <div className="row">
                                <div className="col-xl-3">
                                    <div className="news__img">
                                        <a href={data[7].link}>
                                            <img src={data[7].hinhAnh}  />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xl-9">
                                    <a href={data[7].link} className="news__title news__title-small">
                                       {data[7].tieuDe}
    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )


    }
    render() {
        return (
            <>
                {this.renderHTML()}
            </>
        )
    }
}

