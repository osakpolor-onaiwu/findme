import React, { useEffect } from "react";
import { connect } from "react-redux";
import M from "materialize-css";
import { AlignJustify } from "react-feather";
import { Link } from "react-router-dom";
import SignedInLink from "../auth/signedInLink";
import SignedOutLink from "../auth/signedoutLInk";
import SignedOutLinkMobile from "../auth/signedOutMobile";
import SignedInLinkMobile from "../auth/signedInMobile";

export const Navbar = ({ isAuthenticated }) => {
  useEffect(() => {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".sidenav");
      var instances = M.Sidenav.init(elems, {});
    });
  }, []);

  const navigation = isAuthenticated ? <SignedInLink /> : <SignedOutLink />;

  const navigationMobile = isAuthenticated ? (
    <SignedInLinkMobile />
  ) : (
    <SignedOutLinkMobile />
  );

  return (
    <div id="top-navigation">
      {/* <!-- Navbar --> */}
      <div id="navbar" className="hide-on-med-and-down">
        {navigation}
      </div>

      <div id="mobileNavbar" className=" hide-on-large-only contain">
        <Link to="/" className="logo black-text">
          <img className="log" src="./logo.jpg" alt="logo" />
        </Link>
        <a href="#" data-target="slide-out" className="sidenav-trigger">
          <AlignJustify color="white" />
        </a>
      </div>

      {/* <!-- Side Bar Mobile --> */}
      <ul id="slide-out" className="sidenav right">
        {navigationMobile}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
