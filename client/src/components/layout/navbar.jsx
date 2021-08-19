import React, { useEffect } from "react";
import { connect } from "react-redux";
import M from "materialize-css";
import { AlignJustify } from "react-feather";
import { Link } from "react-router-dom";
import SignedInLink from "../auth/signedInLink";
import SignedOutLink from "../auth/signedoutLInk";
import SignedOutLinkMobile from "../auth/signedOutMobile";
import SignedInLinkMobile from "../auth/signedInMobile";

const styling = {
  padding: "10px 10px",
  backgroundColor: "#f1f1f102",
};

const stylingb = {
  padding: "20px 10px",
  backgroundColor: "#f1f1f1",
};

export const Navbar = ({ isAuthenticated }) => {
  useEffect(() => {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".sidenav");
      var instances = M.Sidenav.init(elems, {});
    });
  }, []);

  window.onscroll = function () {
    scrollFunction();
  };

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      document.getElementById("top-navigation").style.padding = "10px 10px";
    } else {
      document.getElementById("top-navigation").style.padding = "20px 10px";
    }
  };
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
          <h6>Hivesolution</h6>
        </Link>
        <a href="#" data-target="slide-out" className="sidenav-trigger">
          <AlignJustify color="black" />
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
