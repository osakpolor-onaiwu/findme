import React, { Component, useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link, Redirect, NavLink } from "react-router-dom";
import SignUpAction from "../../redux/actions/signUpAction";
import ClearError from "../../redux/actions/clearError";
import {Users} from 'react-feather'



class SignUp extends React.Component {
    state = {
        name: "",
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
        const { name, email, password } = this.state;
        const newUser = {
            name,
            email,
            password,
        };
        this.props.SignUpAction(newUser);
    };

    componentDidUpdate(prevProps) {
        const { error } = this.props;
        //checks if the error changes
        if (error !== prevProps.error) {
            //checks the id of the error from signup action
            if (error.id === "REGISTER_FAIL") {
                this.setState({ msg: error.msg.msg });
            }
        } else {
            this.props.ClearError();
        }
    }

    render() {
        const { isAuthenticated } = this.props;
        if (isAuthenticated) {
            return <Redirect to="/login" />;
        }
        return (
            <main>
                <div className="authform">
                    <form onSubmit={this.handleSubmit} className="black-text">
                        <Users color='black' size='35'/>
                        <h4>Sign UP</h4>
                        <p>
                            Already have an Account?{" "}
                            <NavLink to="/login" className="blue-text">
                                Login
                            </NavLink>
                        </p>

                        <label className="black-text" htmlFor="name">
                            User name
                        </label>
                        <input
                            className="black-text"
                            required={true}
                            type="text"
                            name="name"
                            onChange={this.handleChange}
                            placeholder="Enter your name"
                        />
                        <label className="black-text" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="black-text"
                            required={true}
                            type="email"
                            placeholder="Enter your Email"
                            name="email"
                            id="email"
                            onChange={this.handleChange}
                        />
                        <label className="black-text" htmlFor="password">
                            Password
                        </label>
                        <input
                            required={true}
                            className="black-text"
                            type="password"
                            minLength={7}
                            placeholder="password"
                            name="password"
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
                            SignUP
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
        SignUpAction: (newUser) => {
            dispatch(SignUpAction(newUser));
        },
        ClearError: () => {
            dispatch(ClearError());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
