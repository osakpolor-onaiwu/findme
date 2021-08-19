import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import { Dropdown } from "react-materialize";
import { AlignJustify, ArrowDown } from "react-feather";
import { NavLink } from "react-router-dom";

const SignedOutLinkMobile = ({ category }) => {
  const showcategories = category.length ? (
    category.map((item) => {
      return (
        <li key={item._id} className="sidenav-close">
          <NavLink to={`/category/${item.name}`}>{item.name}</NavLink>
        </li>
      );
    })
  ) : (
    <div></div>
  );

  const Link = (
    <div>
      <li style={{ marginBottom: "60%" }}>
        <div className="user-view">
          <div style={{ height: "200px" }} className="background">
            <img style={{ height: "100%", width: "100%" }} src="./logo2.png" />
          </div>
        </div>
      </li>
      <li className="sidenav-close">
        <NavLink to="/">Home</NavLink>
      </li>
      {/* <!-- Dropdown Trigger --> */}
      <li>
        <Dropdown
          id="Dropdown_5"
          options={{
            alignment: "right",
            autoTrigger: true,
            closeOnClick: true,
            constrainWidth: true,
            coverTrigger: false,
            hover: false,
            inDuration: 150,
            outDuration: 250,
          }}
          trigger={<a href="#!">Categories</a>}
        >
          {showcategories}
        </Dropdown>
      </li>
      <li className="sidenav-close">
        <NavLink to="/about">About</NavLink>
      </li>
      <li className="sidenav-close">
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li className="sidenav-close">
        <NavLink to="/seller" className="navigation-link">
          Sell
        </NavLink>
      </li>

      <li className="sidenav-close">
        <NavLink to="/login">login</NavLink>
      </li>
      <li className="sidenav-close">
        <NavLink to="/signUp">SignUp</NavLink>
      </li>
    </div>
  );

  return (
    <div>
      {/* Dropdown Structure */}
      <ul id="dropdown1" className="dropdown-content">
        {showcategories}
      </ul>
      {Link}
    </div>
  );
};

const mapStateToProps = (state) => ({
  category: state.category.category,
});
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignedOutLinkMobile);
