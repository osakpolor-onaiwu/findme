import React, { Component, useState, useEffect } from "react";
import { LogIn, UserPlus } from "react-feather";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

const SignedOutLink = ({ category }) => {
  const showcategories = category.length ? (
    category.map((item) => {
      return (
        <li key={item._id} className="drop">
          <NavLink className="white-text" to={`/category/${item.name}`}>
            {item.name}
          </NavLink>
        </li>
      );
    })
  ) : (
    <div></div>
  );

  const Links = (
    <ul id="nav-large" className=" hide-on-med-and-down">
      <img className="log" src="/logo.jpg" alt="logo" />

      <li>
        <NavLink className="navigation-link" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="navigation-link" to="/about">
          About
        </NavLink>
      </li>
      <li>
        <NavLink className="navigation-link" to="/seller">
          Sell
        </NavLink>
      </li>

      {/* <!-- Dropdown  */}
      <li className="dropdownContainer mydrop-trigger">
        <a href="#!" className=" navigation-link">
          Categories
        </a>
        <ul id="myDropdown-content" className="content">
          {showcategories}
        </ul>
      </li>

      <li>
        <NavLink className="navigation-link nav-auth-link" to="/login">
          {/* <LogIn color="white" size="14" /> */}
          <span> Login </span>
        </NavLink>
      </li>
      <li>
        <NavLink className="navigation-link nav-auth-link" to="/signUp">
          {/* <UserPlus color="white" size="14" /> */}

          <span> Join</span>
        </NavLink>
      </li>
    </ul>
  );
  return <div className="contain">{Links}</div>;
};

const mapStateToProps = (state) => ({
  category: state.category.category,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SignedOutLink);
