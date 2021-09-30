import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Carousel from "../extra/carousel";

export const ManufacturerContact = ({ sample, manufacturer }) => {
  const iniState = {
    first_name: "",
    last_name: "",
    email: "",
    phone: null,
    message: "",
    location: "",
    user: "",
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
        <h3 className="white-text">{serviceProvider.companyName}</h3>
        <h5 className="white-text">{serviceProvider.description} </h5>
      </div>
    );
  });

  return (
    <main className="row contact-manufacturer">
      <div className="col hide-on-large-only rightText s12">{name}</div>

      <div className="col form-col s12 l7">
        <form onSubmit={handleSubmit}>
          <h5 className="center white-text">Contact this server Provider</h5>

          <div>
            <label htmlFor="first_name">First Name</label>
            <input
              required={true}
              placeholder="First Name"
              name="first_name"
              onChange={handleChange}
              type="text"
              id="first_name"
              className="validate browser-default"
            />
          </div>

          <div>
            <label htmlFor="last_name">Last Name</label>
            <input
              required={true}
              placeholder="Last Name"
              name="last_name"
              onChange={handleChange}
              type="text"
              id="last_name"
              className="validate browser-default"
            />
          </div>

          <div>
            <label htmlFor="email" data-error="wrong" data-success="right">
              Email
            </label>
            <input
              required={true}
              placeholder="Enter your Email"
              name="email"
              onChange={handleChange}
              type="email"
              id="email"
              className="validate browser-default"
            />
          </div>

          <div>
            <label htmlFor="phone" data-error="wrong" data-success="right">
              Phone
            </label>
            <input
              required={true}
              placeholder="Phone"
              name="phone"
              onChange={handleChange}
              type="tel"
              id="phone"
              className="validate browser-default"
            />
          </div>

          <div>
            <label htmlFor="location">location </label>
            <input
              required={true}
              placeholder="Location to deliver to"
              name="location"
              onChange={handleChange}
              type="text"
              id="location"
              className="validate browser-default"
            />
          </div>
          <div>
            <label htmlFor="message">Describe what you want</label>
            <textarea
              id="textarea"
              onChange={handleChange}
              name="message"
              className=" browser-default"
            ></textarea>
          </div>

          <button className="button white-text" type="submit" name="action">
            Submit
          </button>
        </form>
      </div>
      <div className="col hide-on-med-and-down rightText l5">
        {name}
        <Carousel samples={sample} />
      </div>
    </main>
  );
};

const mapStateToProps = (state, ownprops) => {
  let name = ownprops.match.params.manufacturerContact;

  return {
    sample: state.manufacturers.samples.filter((sample) => {
      return sample.manufacturer.companyName == name;
    }),

    manufacturer: state.manufacturers.manufacturers.filter(
      (serviceProvider) => {
        return serviceProvider.companyName == name;
      }
    ),
  };
};
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManufacturerContact);
