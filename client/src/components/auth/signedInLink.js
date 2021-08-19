import React, { Component, useState, useEffect } from "react";
import { Power } from "react-feather";
import { connect } from "react-redux";
import { NavLink, Link, Redirect } from "react-router-dom";
import SignOut from "../../redux/actions/logoutAction";

const SignedInLink = ({ category, logout, isAuthenticated, user }) => {
  const initialState = {
    show: false,
  };

  const [state, setState] = useState(initialState);

  const toggle = () => {
    setState({
      show: !state.show,
    });
  };

  useEffect(() => {
    // window.onclick = toggle;

    if (state.show === false) {
      document.getElementById("myDropdown-content").className = "hide";
    } else {
      document.getElementById("myDropdown-content").className = "show";
    }
  }, [state.show]);

  const showcategories = category.length ? (
    category.map((item) => {
      return (
        <li key={item._id}>
          <NavLink className="white-text" to={`/category/${item.name}`}>
            {item.name}
          </NavLink>
        </li>
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

  const Links = (
    <ul id="nav-large" className=" hide-on-med-and-down">
      <h6>Hivesolution</h6>
      <li>
        <Link className="navigation-link" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="navigation-link" to="/about">
          About
        </Link>
      </li>
      <li>
        <NavLink className="navigation-link" to="/seller">
          Sell
        </NavLink>
      </li>

      {/* <!-- Dropdown  */}
      <li className="dropdownContainer mydrop-trigger" onClick={toggle}>
        <a href="#!" className=" navigation-link">
          Categories
        </a>
        <ul id="myDropdown-content" className="content">
          {showcategories}
        </ul>
      </li>

      <li>
        <NavLink id="user" className="navigation-link" to="#">
          {user ? `${user.name}` : ""}
        </NavLink>
      </li>
      <li>
        <NavLink className="navigation-link" onClick={signoutRedirect} to="#!">
          <span>Logout</span>
        </NavLink>
      </li>
    </ul>
  );
  return <div className="contain">{Links}</div>;
};

const mapStateToProps = (state) => ({
  category: state.category.category,
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch(SignOut());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(SignedInLink);
