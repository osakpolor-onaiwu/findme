import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import M from "materialize-css";
import { AlignJustify, ArrowDown } from "react-feather";
import { NavLink, Redirect } from "react-router-dom";
import { Dropdown } from "react-materialize";
import SignOut from "../../redux/actions/logoutAction";

const SignedInLinkMobile = ({ category, logout, isAuthenticated }) => {
  const showcategories = category.length ? (
    category.map((item) => {
      return (
        <NavLink
          className="sidenav-close"
          key={item._id}
          to={`/category/${item.name}`}
        >
          {item.name}
        </NavLink>
      );
    })
  ) : (
    <div></div>
  );

  const signoutRedirect = () => {
    logout();
    if (isAuthenticated === false) {
      return <Redirect to="/login" />;
    }
  };

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
        <NavLink className="navigation-link" to="/seller">
          Sell
        </NavLink>
      </li>
      <li className="sidenav-close">
        <NavLink onClick={signoutRedirect} to="#!">
          logout
        </NavLink>
      </li>
      <li className="sidenav-close">
        <NavLink to="/orders">orders</NavLink>
      </li>
    </div>
  );

  return <div>{Link}</div>;
};

const mapStateToProps = (state) => ({
  category: state.category.category,
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch(SignOut());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinkMobile);
