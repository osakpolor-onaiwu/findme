import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import { Dropdown } from "react-materialize";
import { NavLink } from "react-router-dom";

const SignedOutLinkMobile = ({ category }) => {
  const showcategories = category.length ? (
    category.map((item) => {
      return (
        <NavLink
          key={item._id}
          to={`/category/${item.name}`}
          className="sidenav-close category-dropdown white-text"
        >
          {item.name}
        </NavLink>
      );
    })
  ) : (
    <div></div>
  );

  const Link = (
    <div>
      <li className="sidenav-close">
        <NavLink to="/" className="white-text">
          Home
        </NavLink>
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
          trigger={
            <a href="#!" className="white-text">
              Categories
            </a>
          }
        >
          {showcategories}
        </Dropdown>
      </li>
      <li className="sidenav-close">
        <NavLink to="/about" className="white-text">
          About
        </NavLink>
      </li>
      <li className="sidenav-close">
        <NavLink to="/contact" className="white-text">
          Contact
        </NavLink>
      </li>
      <li className="sidenav-close">
        <NavLink to="/seller" className="navigation-link white-text">
          Sell
        </NavLink>
      </li>

      <li className="sidenav-close">
        <NavLink to="/login" className="white-text">
          login
        </NavLink>
      </li>
      <li className="sidenav-close">
        <NavLink to="/signUp" className="white-text">
          SignUp
        </NavLink>
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
