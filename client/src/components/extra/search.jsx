import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { Search } from 'react-feather';
import { NavLink } from 'react-router-dom';

export const SearchForm = ({ manufacturers }) => {
  const iniState = {
    search: '',
  };

  const [state, setState] = useState(iniState);

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const result = () => {
    if (state.search !== '') {
      const Search = manufacturers.filter((manufacturer) => {
        const searchValue = state.search
          .toLowerCase()
          .split()
          .map((word) => {
            return word.charAt(0).toUpperCase() + word.slice(1);
          })
          .join();

        const Name = manufacturer.name;

        return Name.match(searchValue);
      });

      const SearchResult = Search ? (
        Search.map((manufacturer) => {
          return (
            <NavLink
              className='black-text'
              to={`/manufacturer/${manufacturer.name}`}
            >
              <li key={manufacturer._id}>{manufacturer.name}</li>
            </NavLink>
          );
        })
      ) : (
        <li className='black-text'>No Record Matches {state.search}</li>
      );
      return <ul>{SearchResult}</ul>;
    } else {
      return <div></div>;
    }
  };

  return (
    <div className='search-bar'>
      <form className='browser-default' id='navform'>
        <input
          onChange={handleChange}
          className='browser-default black-text validate'
          type='text'
          name='search'
          required={true}
          placeholder='Search'
        />
        <p className=' result-container black-text'>{result()}</p>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  manufacturers: state.manufacturers.manufacturers,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
