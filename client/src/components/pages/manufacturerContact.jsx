import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import SearchForm from '../extra/search';
import { MessageSquare } from 'react-feather';

export const ManufacturerContact = ({ sample, manufacturer }) => {
  const iniState = {
    first_name: '',
    last_name: '',
    email: '',
    phone: null,
    message: '',
    location: '',
    user: '',
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
  };

  const name = manufacturer.map((serviceProvider) => {
    return (
      <div>
        <h3>{serviceProvider.companyName}</h3>
        <h5>{serviceProvider.description} </h5>
      </div>
    );
  });

  const samplesgallary = () => {
    const samples = sample.length ? (
      sample.map((samplesItem) => {
        return (
          <div key={samplesItem._id} className='col s6 m4 l3 xl3'>
            <div className='card-box white center'>
              <img
                className='category-image center'
                src={samplesItem.image}
                alt='Sample image'
              />
              <h6 className='card-text white-text center'>
                {samplesItem.name}
              </h6>
              <div></div>
            </div>
          </div>
        );
      })
    ) : (
      <div className='center'>
        <p>This manufacturer does not have any samples</p>
      </div>
    );
    return samples;
  };

  return (
    <main className='contain'>
      <div className='row center'>{name}</div>
      <div className='row'>{samplesgallary()}</div>

      <div className='row contain'>
        <div className='ContactForm col s12'>
          <form onSubmit={handleSubmit}>
            <div className='center '>
              <MessageSquare color='black' size='30' />
              <h5>Contact this server Provider</h5>
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

            <div className='input-field col s12'>
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
                name='message'
                className='materialize-textarea '
              ></textarea>
              <label htmlFor='message'>Describe what you want</label>
            </div>

            <div className='input-field col s12 '>
              <input
                required={true}
                name='location'
                onChange={handleChange}
                type='text'
                id='location'
                className='validate'
              />
              <label htmlFor='location'>location to deliver to</label>
            </div>

            <button className='button white-text' type='submit' name='action'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

const mapStateToProps = (state, ownprops) => {
  let id = ownprops.match.params.manufacturerContact;
  let name = ownprops.match.params.manufacturerContact;

  return {
    sample: state.manufacturers.samples.filter((sample) => {
      return sample.manufacturer.companyName == name;
    }),

    manufacturer: state.manufacturers.manufacturers.filter(
      (serviceProvider) => {
        return serviceProvider.companyName == name;
      },
    ),
  };
};
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ManufacturerContact);
