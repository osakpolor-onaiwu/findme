import React, { Component, useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link, Redirect, NavLink } from "react-router-dom";
import SignUpAction from "../../redux/actions/signUpAction";
import ClearError from "../../redux/actions/clearError";
import { Users } from "react-feather";

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
      <main className="auth">
        <form onSubmit={this.handleSubmit} className="">
          <Users color="black" size="35" />
          <h4>Sign UP</h4>

          <label className="" htmlFor="name">
            User name
          </label>
          <input
            className=" browser-default"
            required={true}
            type="text"
            name="name"
            onChange={this.handleChange}
            placeholder="Username"
          />
          <label className="" htmlFor="email">
            Email
          </label>
          <input
            className=" browser-default"
            required={true}
            type="email"
            placeholder="Email"
            name="email"
            id="email"
            onChange={this.handleChange}
          />
          <label className="" htmlFor="password">
            Password
          </label>
          <input
            required={true}
            className=" browser-default"
            type="password"
            minLength={7}
            placeholder="Password"
            name="password"
            onChange={this.handleChange}
          />

          <button className="" type="submit" name="action">
            SignUP
          </button>
          <p>
            {this.state.msg ? <span className="">{this.state.msg}</span> : null}
          </p>
          <p>
            Already have an Account?{" "}
            <NavLink to="/login" className="blue-text">
              Login
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
    SignUpAction: (newUser) => {
      dispatch(SignUpAction(newUser));
    },
    ClearError: () => {
      dispatch(ClearError());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
