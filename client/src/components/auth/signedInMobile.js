import React from "react";
import { connect } from "react-redux";
import M from "materialize-css";
import { NavLink, Redirect } from "react-router-dom";
import { Dropdown } from "react-materialize";
import SignOut from "../../redux/actions/logoutAction";

const SignedInLinkMobile = ({ category, logout, isAuthenticated }) => {
  const showcategories = category.length ? (
    category.map((item) => {
      return (
        <NavLink
          className="sidenav-close category-dropdown white-text"
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
      <li className="sidenav-close">
        <NavLink to="/" className="white-text">
          Home
        </NavLink>
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
          className="white-text"
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
        <NavLink className="navigation-link white-text" to="/seller">
          Sell
        </NavLink>
      </li>
      <li className="sidenav-close">
        <NavLink onClick={signoutRedirect} className="white-text" to="#!">
          logout
        </NavLink>
      </li>
      <li className="sidenav-close">
        <NavLink to="/orders" className="white-text">
          orders
        </NavLink>
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
