import React, { Component } from "react";
import { connect } from "react-redux";
import Banner from "../extra/banner";
import Categories from "../extra/categories";
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
          <h6 className="home-category-related-text">
            Samples from our service providers
          </h6>
          {/* <HorizontalScroll /> */}
        </section>
        {/* <section id="to-categories">
          <NavLink to="/categories" className="scroll-button">
            See All
          </NavLink>
        </section> */}
        <section className="row about-section">
          <About />
        </section>

        <section className="row categories-section">
          <div className="col  s12">
            <Categories />
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
