import React, { Component, useState, useEffect } from "react";
import { Link, Redirect, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import LoginAction from "../../redux/actions/loginAction";
import ClearError from "../../redux/actions/clearError";
import { User } from "react-feather";

class Login extends React.Component {
    state = {
        email: "",
        password: "",
        msg: null,
    };

    handleChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        const user = { email, password };
        this.props.LoginAction(user);
    };

    componentDidUpdate(prevProps) {
        const { error } = this.props;
        //checks if the error changes
        if (error !== prevProps.error) {
            //checks the id of the error from signup action
            if (error.id === "LOGIN_FAIL") {
                this.setState({ msg: error.msg.msg });
            }
        } else {
            this.props.ClearError();
        }
    }

    render() {
        const { isAuthenticated } = this.props;
        if (isAuthenticated) {
            return <Redirect to="/" />;
        }

        return (
            <main>
                <div className="authform">
                    <form className="black-text" onSubmit={this.handleSubmit}>

                        <User color="black" size="35" />

                        <h4 className="center">Sign In</h4>

                        <p className="center">
                            Don't have an Account?{" "}
                            <NavLink className="blue-text" to="/signUp">
                                SignUp
                            </NavLink>
                        </p>

                        <label className="black-text" htmlFor="email">
                            Email
                        </label>

                        <input
                            className="black-text"
                            required={true}
                            type="email"
                            name="email"
                            onChange={this.handleChange}
                            placeholder="Enter your email"
                        />

                        <label className="black-text" htmlFor="password">
                            Password
                        </label>

                        <input
                            className="black-text"
                            required={true}
                            type="password"
                            placeholder="Enter your password"
                            name="password"
                            id="password"
                            onChange={this.handleChange}
                        />
                        <p>
                            {this.state.msg ? (
                                <span className="black-text">
                                    {this.state.msg}
                                </span>
                            ) : null}
                        </p>

                        <button
                            className="white-text"
                            type="submit"
                            name="action">
                            Submit
                        </button>

                    </form>
                </div>
            </main>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        error: state.error,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        LoginAction: (userDetails) => {
            dispatch(LoginAction(userDetails));
        },
        ClearError: () => {
            dispatch(ClearError());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
