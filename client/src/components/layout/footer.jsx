import React, { Component } from "react";
import { Facebook, Instagram, Twitter } from "react-feather";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col s12 m7 l8">
            <ul>
              <li>
                <Link className="white-text lis" to="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="white-text lis" to="/seller">
                  become a service provider
                </Link>
              </li>
              <li>
                <Link className="white-text lis" to="/contact">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="white-text lis" to="/faq">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div className="col right-side s12 m5 l4">
            <h4 className="footer-logo">SwiftServe</h4>
            <span>
              <a href="#">
                <Facebook className="social" />
              </a>
              <a href="#">
                <Twitter className="social" />
              </a>
              <a href="#">
                <Instagram className="social" />
              </a>
            </span>
          </div>
        </div>
        <div className="white-text lis copy-right center">
          © 2021 Copyright Hivesolution
        </div>
      </div>
    </footer>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default Footer;
