import React, { useState } from "react";
import { connect } from "react-redux";
import SellerAction from "../../redux/actions/sellerAction";

export const Seller = ({ SellerActions }) => {
  const iniState = {
    first_name: "",
    last_name: "",
    email: "",
    phone: null,
    description: "",
    landmark: "",
    companyName: "",
    companyLocation: "",
    state: "",
    long: "",
    lat: "",
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
    SellerActions({
      ...state,
    });
  };
  return (
    <main className="row seller-form">
      <div className="col s12 m12 l6 right-text hide-on-large-only">
        <h3 className="white-text">Would you love to sell?</h3>
        <p className="white-text">
          if YES!, then contact us with form, and we will get back to you on
          terms and conditions.
        </p>
      </div>
      <div className="col s12 m12 l6">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="first_name">First Name</label>
            <input
              required={true}
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
              name="email"
              onChange={handleChange}
              type="email"
              id="email"
              className="validate browser-default"
            />
          </div>

          <div>
            <label htmlFor="companyName">Company Name</label>
            <input
              required={true}
              name="companyName"
              onChange={handleChange}
              type="text"
              id="companyName"
              className="validate browser-default"
            />
          </div>

          <div>
            <label htmlFor="companyLocation">Company Location</label>
            <input
              required={true}
              name="companyLocation"
              onChange={handleChange}
              type="text"
              id="companyLocation"
              className="validate browser-default"
            />
          </div>

          <div>
            <label htmlFor="landmark">Nearest Landmark</label>
            <input
              required={true}
              name="landmark"
              onChange={handleChange}
              type="text"
              id="landmark"
              className="validate browser-default"
            />
          </div>

          <div>
            <label htmlFor="state">State</label>
            <input
              required={true}
              name="state"
              onChange={handleChange}
              type="text"
              id="state"
              className="validate browser-default"
            />
          </div>
          <div>
            <label htmlFor="phone" data-error="wrong" data-success="right">
              Phone
            </label>
            <input
              required={true}
              name="phone"
              onChange={handleChange}
              type="tel"
              id="phone"
              className="validate browser-default"
            />
          </div>

          <div>
            <label htmlFor="long" data-error="wrong" data-success="right">
              Longitude
            </label>
            <input
              name="long"
              onChange={handleChange}
              type="text"
              id="long"
              className="validate browser-default"
            />
          </div>

          <div>
            <label htmlFor="lat" data-error="wrong" data-success="right">
              Latitude
            </label>
            <input
              name="lat"
              onChange={handleChange}
              type="text"
              id="lat"
              className="validate browser-default"
            />
          </div>

          <div>
            <label htmlFor="description">Describe the service you offer</label>
            <textarea
              id="textarea1"
              onChange={handleChange}
              name="description"
              className=" browser-default"
              required={true}
            ></textarea>
          </div>
          <button className="button white-text" type="submit" name="action">
            Submit
          </button>
        </form>
      </div>
      <div className="col s12 m12 l6 right-text hide-on-med-and-down">
        <h3 className="white-text">Would you love to sell?</h3>
        <p className="white-text">
          if YES!, then contact us with form, and we will get back to you on
          terms and conditions.
        </p>
      </div>
    </main>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    SellerActions: (seller) => {
      dispatch(SellerAction(seller));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Seller);
