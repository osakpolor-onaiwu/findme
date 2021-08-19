import React, { useState } from "react";
import { connect } from "react-redux";
import { Mail, MapPin, Phone } from "react-feather";
import ContactAction from "../../redux/actions/contactAction";
import ClearError from "../../redux/actions/clearError";

export const Contact = ({ contactAction, feedback }) => {
  const iniState = {
    email: "",
    feedBackType: "question",
    feedback: "",
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
    contactAction({
      ...state,
    });
  };

  return (
    <main>
      <section className="row top-contact-section">
        <img src="./contact.jpg" alt="contact" />
      </section>

      <section className="row contact-us">
        <div className="col s12 l6 forms">
          <form onSubmit={handleSubmit}>
            <h4>Send us a message</h4>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              onChange={handleChange}
              name="email"
              required={true}
              className="browser-default"
            />
            <label htmlFor="feedBackType">Reason for Contacting</label>
            <select
              name="feedBackType"
              onChange={handleChange}
              className="browser-default"
              defaultValue={state.feedBackType}
            >
              <option value="question">Question</option>
              <option value="compliant">Compliant</option>
              <option value="suggestion">Suggestion</option>
            </select>
            <label htmlFor="feedback">How can we help you?</label>
            <textarea
              name="feedback"
              required={true}
              className="browser-default"
              onChange={handleChange}
            ></textarea>
            <button type="submit">Submit</button>
            <p>{feedback ? feedback.status : ""}</p>
          </form>
        </div>
        <div className="col s12 l6 text-address">
          <h5>
            <MapPin size="20" color="grey" className="contact-icon" />
            Address
          </h5>
          <p>lorem ipsum street lagoss Nigeria</p>
          <h5>
            <Phone color="grey" size="20" className="contact-icon" />
            Phone
          </h5>
          <p>08110745134</p>
          <p>08110745134</p>
          <h5>
            <Mail color="grey" size="20" className="contact-icon" />
            Email
          </h5>
          <p>Hivesolution@gmail.com</p>
        </div>
      </section>
    </main>
  );
};

const mapStateToProps = (state) => {
  console.log("feedback-----", state.contact);
  return {
    feedback: state.Contact,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    contactAction: (feedback) => {
      dispatch(ContactAction(feedback));
    },
    ClearError: () => {
      dispatch(ClearError());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
