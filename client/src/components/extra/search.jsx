import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { Search } from "react-feather";

export const SearchForm = () => {
    const iniState = {
        search: "",
    };

    const [state, setState] = useState(iniState);

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log(state)
    };
    return (
        <div>
            <form
                onSubmit={handleSubmit}
                className="browser-default"
                id="navform">
                <input
                    onChange={handleChange}
                    className="browser-default black-text"
                    type="text"
                    name='search'
                    required={true}
                    placeholder='Search'
                />
              
            </form>
        </div>
    );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
