import React, { Component, useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const SignedOutLink = ({ category }) => {
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
                    <Link
                        className="navigation-link"
                        to={`/category/${item.name}`}>
                        {item.name}
                    </Link>
                </li>
            );
        })
    ) : (
        <li></li>
    );

    const Links = (
        <ul id="nav-large" className=" hide-on-med-and-down">
            <li>
                <img src="./logo2.jpg" alt="logo" />
            </li>
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
                <Link className="navigation-link" to="/contact">
                    Contact
                </Link>
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
                <Link className="navigation-link nav-auth-link" to="/login">
                    login
                </Link>
            </li>
            <li>
                <Link className="navigation-link nav-auth-link" to="/signUp">
                    SignUp
                </Link>
            </li>
        </ul>
    );
    return <div>{Links}</div>;
};

const mapStateToProps = (state) => ({
    category: state.category.category,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SignedOutLink);
