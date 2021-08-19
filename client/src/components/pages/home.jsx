import React, { Component } from "react";
import { connect } from "react-redux";
import Banner from "../extra/banner";
import Samples from "../extra/samples";
import HorizontalScroll from "../extra/horizontalscroll";
import About from "../extra/home-about";
import { NavLink } from "react-router-dom";

export class Home extends Component {
  render() {
    return (
      <main id="home">
        <section className="row banner-section">
          <Banner />
        </section>
        <section className="row center contain scroll-section">
          <h6 className="home-category-related-text">TOP CATEGORIES</h6>
          <HorizontalScroll />
        </section>

        <section className="row about-section">
          <About />
        </section>

        <section className="row sample-section">
          <div className="col  s12">
            <Samples />
          </div>
        </section>
      </main>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    manufacturers: state.manufacturers.manufacturers,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
