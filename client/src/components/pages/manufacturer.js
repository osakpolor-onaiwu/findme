import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { ArrowRight, X, Compass, Mail, Phone } from 'react-feather';
import SearchForm from '../extra/search';
import { NavLink } from 'react-router-dom';

const Manufacturers = ({ manufacturers }) => {
  const iniState = {
    filter: '',
  };

  const [state, setState] = useState(iniState);

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const result = () => {
    if (state.filter == '') {
      const All = manufacturers.length ? (
        manufacturers.map((manufacturer) => {
          return (
            <div key={manufacturer._id} className='col s12 m6 l4'>
              <NavLink
                className='black-text manufacturer-container'
                to={`/manufacturer/${manufacturer.companyName}`}
              >
                <div className=' manufacturer  '>
                  <h3> {manufacturer.companyName} </h3>
                  <h5>
                    <strong>Address</strong>: {manufacturer.address}
                  </h5>
                  <h5>
                    <strong>state</strong>: {manufacturer.state}
                  </h5>
                  <h5>
                    <strong>city</strong>: {manufacturer.city}
                  </h5>
                  <h6 className='center'>Contact this Manufacturer</h6>
                </div>
              </NavLink>
            </div>
          );
        })
      ) : (
        <div className='contain'>No manufacturers in this category yet</div>
      );

      return All;
    } else {
      const Search = manufacturers.filter((manufacturer) => {
        const City = manufacturer.city;

        return City.match(state.filter);
      });

      const SearchResult = Search ? (
        Search.map((manufacturer) => {
          return (
            <div key={manufacturer._id} className='col s12 m6 l4'>
              <NavLink
                className='black-text manufacturer-container'
                to={`/manufacturer/${manufacturer.companyName}`}
              >
                <div className=' manufacturer  '>
                  <h3> {manufacturer.companyName} </h3>
                  <h5>
                    <strong>Address</strong>: {manufacturer.address}
                  </h5>
                  <h5>
                    <strong>state</strong>: {manufacturer.state}
                  </h5>
                  <h5>
                    <strong>city</strong>: {manufacturer.city}
                  </h5>
                  <h6 className='center'>Contact this Manufacturer</h6>
                </div>
              </NavLink>
            </div>
          );
        })
      ) : (
        <li className='black-text'>No Record Matches {state.search}</li>
      );

      return SearchResult;
    }
  };

  return (
    <main>
      <section className='row contain'>
        <SearchForm />
      </section>
      <section className='row contain manufactuer-form'>
        <form className='browser-default'>
          <input
            name='filter'
            onChange={handleChange}
            className='browser-default black-text validate'
            type='text'
            required={true}
            placeholder='Search by city'
          />
        </form>
      </section>
      <section className='row contain'>{result()}</section>
      <section className='row bottom-row'></section>
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
