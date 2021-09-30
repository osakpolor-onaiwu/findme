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
      <main className="auth">
        <form className=" auth-form" onSubmit={this.handleSubmit}>
          <User color="black" className="center" size="35" />

          <h4 className="center">Sign In</h4>

          <label className="" htmlFor="email">
            Email
          </label>

          <input
            className=" browser-default"
            required={true}
            type="email"
            name="email"
            onChange={this.handleChange}
            placeholder="Email"
          />

          <label className="" htmlFor="password">
            Password
          </label>

          <input
            className=" browser-default"
            required={true}
            type="password"
            placeholder="password"
            name="password"
            id="password"
            onChange={this.handleChange}
          />

          <button className="" type="submit" name="action">
            Submit
          </button>
          <p>
            {this.state.msg ? <span className="">{this.state.msg}</span> : null}
          </p>

          <p className="center">
            Don't have an Account?{" "}
            <NavLink className="blue-text" to="/signUp">
              SignUp
            </NavLink>
          </p>
        </form>
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
