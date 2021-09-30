import { NavLink } from "react-router-dom";
import React from "react";

const result = ({ state, manufacturers }) => {
  if (state.filter == "" && state.filterState == "") {
    const All = manufacturers.length ? (
      manufacturers.map((manufacturer) => {
        return (
          <div key={manufacturer._id} className="col  s12 m6 l4">
            <NavLink
              className="black-text  manufacturer-container"
              to={`/manufacturer/${manufacturer.companyName}`}
            >
              <div className=" manufacturer manufacturer-card ">
                <h3> {manufacturer.companyName} </h3>
                <h5>
                  <strong>Address</strong>: {manufacturer.address}
                </h5>
                <h5>
                  <strong>State</strong>: {manufacturer.state}
                </h5>
                <h5>
                  <strong>City</strong>: {manufacturer.city}
                </h5>
                <h6 className="center">Contact me</h6>
              </div>
            </NavLink>
          </div>
        );
      })
    ) : (
      <div className="contain">No manufacturers in this category yet</div>
    );

    return All;
  } else if (state.filter !== "") {
    const Search = manufacturers.filter((manufacturer) => {
      const City = manufacturer.city;

      return City.match(state.filter);
    });

    const SearchResult = Search ? (
      Search.map((manufacturer) => {
        return (
          <div key={manufacturer._id} className="col s12 m6 l4">
            <NavLink
              className="black-text manufacturer-container"
              to={`/manufacturer/${manufacturer.companyName}`}
            >
              <div className=" manufacturer ">
                <h3> {manufacturer.companyName} </h3>
                <h5>
                  <strong>Address</strong>: {manufacturer.address}
                </h5>
                <h5>
                  <strong>State</strong>: {manufacturer.state}
                </h5>
                <h5>
                  <strong>City</strong>: {manufacturer.city}
                </h5>
                <h6 className="center">Contact me</h6>
              </div>
            </NavLink>
          </div>
        );
      })
    ) : (
      <li className="black-text">No Record Matches {state.search}</li>
    );

    return SearchResult;
  } else if (state.filterState !== "") {
    const Search = manufacturers.filter((manufacturer) => {
      const State = manufacturer.state;

      return State.match(state.filterState);
    });

    const SearchResult = Search ? (
      Search.map((manufacturer) => {
        return (
          <div key={manufacturer._id} className="col s12 m6 l4">
            <NavLink
              className="black-text manufacturer-container"
              to={`/manufacturer/${manufacturer.companyName}`}
            >
              <div className=" manufacturer ">
                <h3> {manufacturer.companyName} </h3>
                <h5>
                  <strong>Address</strong>: {manufacturer.address}
                </h5>
                <h5>
                  <strong>State</strong>: {manufacturer.state}
                </h5>
                <h5>
                  <strong>City</strong>: {manufacturer.city}
                </h5>
                <h6 className="center">Contact me</h6>
              </div>
            </NavLink>
          </div>
        );
      })
    ) : (
      <li className="black-text">No Record Matches {state.search}</li>
    );

    return SearchResult;
  }
};

export default result;
