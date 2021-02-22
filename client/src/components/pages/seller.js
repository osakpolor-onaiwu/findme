import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { MessageCircle } from 'react-feather';

export const Seller = (props) => {
  const iniState = {
    first_name: '',
    last_name: '',
    email: '',
    phone: null,
    description: '',
    landmark: '',
    companyName: '',
    companyLocation: '',
  };

  const [state, setState] = useState(iniState);

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <div className='row'>
      <div className='ContactForm'>
        <form onSubmit={handleSubmit}>
          <div className='center '>
            <MessageCircle color='black' size='30' />
            <h5>Your Details</h5>
          </div>
          <div className='input-field col s12 l6'>
            <input
              required={true}
              name='first_name'
              onChange={handleChange}
              type='text'
              id='first_name'
              className='validate'
            />
            <label htmlFor='first_name'>First Name</label>
          </div>
          <div className='input-field col s12 l6'>
            <input
              required={true}
              name='last_name'
              onChange={handleChange}
              type='text'
              id='last_name'
              className='validate'
            />
            <label htmlFor='last_name'>Last Name</label>
          </div>

          <div className='input-field col s12 '>
            <input
              required={true}
              name='email'
              onChange={handleChange}
              type='email'
              id='email'
              className='validate'
            />
            <label htmlFor='email' data-error='wrong' data-success='right'>
              Email
            </label>
          </div>

          <div className='input-field col s12 l12'>
            <input
              required={true}
              name='companyName'
              onChange={handleChange}
              type='text'
              id='companyName'
              className='validate'
            />
            <label htmlFor='companyName'>Company Name</label>
          </div>

          <div className='input-field col s12 '>
            <input
              required={true}
              name='companyLocation'
              onChange={handleChange}
              type='text'
              id='companyLocation'
              className='validate'
            />
            <label htmlFor='companyLocation'>Company Location</label>
          </div>

          <div className='input-field col s12 l12'>
            <input
              required={true}
              name='landmark'
              onChange={handleChange}
              type='text'
              id='landmark'
              className='validate'
            />
            <label htmlFor='companyName'>Nearest Landmark</label>
          </div>

          <div className='input-field col s12'>
            <input
              required={true}
              name='phone'
              onChange={handleChange}
              type='tel'
              id='phone'
              className='validate'
            />
            <label htmlFor='phone' data-error='wrong' data-success='right'>
              Phone
            </label>
          </div>
          <div className='input-field browser-default col s12'>
            <textarea
              id='textarea1'
              onChange={handleChange}
              name='description'
              className='materialize-textarea '
            ></textarea>
            <label htmlFor='description'>Describe the service you offer</label>
          </div>
          <button className='button white-text' type='submit' name='action'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Seller);
