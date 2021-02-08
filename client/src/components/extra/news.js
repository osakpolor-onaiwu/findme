import React, { Component } from "react";
import { connect } from "react-redux";

export const News = ({ news }) => {
    console.log(news);

    //gallary for news
    const Newsgallary = () => {
        const News = news.length ? (
            news.map((newsItem) => {
                return (
                    <div key={newsItem.id} className="col s12 m12 l12 xl12">
                        <div className=" news-text">
                            <img
                                id="newsImage"
                                src={newsItem.image}
                                className="img-responsive "
                            />
                            <h6 id="newsletter" className="center ">
                                "{newsItem.news}"
                            </h6>
                        </div>
                    </div>
                );
            })
        ) : (
            <div>
                <div className="preloader-wrapper active">
                    <div className="spinner-layer spinner-blue-only">
                        <div className="circle-clipper left">
                            <div className="circle"></div>
                        </div>
                        <div className="gap-patch">
                            <div className="circle"></div>
                        </div>
                        <div className="circle-clipper right">
                            <div className="circle"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
        return News;
    };
    return <div>{Newsgallary()}</div>;
};

const mapStateToProps = (state) => ({
    news: state.news.news,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(News);
