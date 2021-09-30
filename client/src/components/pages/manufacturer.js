import React, { Component, useState } from "react";
import { connect } from "react-redux";
import States from "./little database/states";
import SearchForm from "../extra/search";
import Result from "../extra/manufacturerFilter";

const Manufacturers = ({ manufacturers }) => {
  const iniState = {
    filter: "",
    filterState: "",
  };

  const [state, setState] = useState(iniState);

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const options = States.length ? (
    States.map((eachState) => {
      return <option value={eachState}>{eachState}</option>;
    })
  ) : (
    <div></div>
  );

  return (
    <main id="manufacturers">
      <div id="sub">
        <section className="center search-form-section">
          <SearchForm />
        </section>
        <section className="row filter">
          <form className="browser-default col s12 m12 l12">
            <input
              name="filter"
              onChange={handleChange}
              className="browser-default black-text validate manufacturer-search"
              type="text"
              required={true}
              placeholder="Filter by city"
            />

            <select
              name="filterState"
              onChange={handleChange}
              className="browser-default"
              defaultValue={state.filterState}
            >
              <option value="">Filter By state</option>
              {options}
            </select>
          </form>
        </section>
      </div>

      <section className="row result">
        <Result state={state} manufacturers={manufacturers} />
      </section>
      <section className="row bottom-row"></section>
    </main>
  );
};

const mapStateToProps = (state, ownProps) => {
  let categoryname = ownProps.match.params.manufacturer;

  return {
    manufacturers: state.manufacturers.manufacturers.filter((manufacturer) => {
      return manufacturer.category.name == categoryname;
    }),
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Manufacturers);
