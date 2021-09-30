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

    contactAction({
      ...state,
    });
  };

  return (
    <main className="contact">
      <section className="row contact-us">
        <div className="col s12 l6 forms">
          <form onSubmit={handleSubmit}>
            <h4 className="white-text">Send us a message</h4>
            <label htmlFor="email" className="white-text">
              Email
            </label>
            <input
              type="email"
              onChange={handleChange}
              name="email"
              required={true}
              className="browser-default"
            />
            <label htmlFor="feedBackType" className="white-text">
              Reason for Contacting
            </label>
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
            <label htmlFor="feedback" className="white-text">
              How can we help you?
            </label>
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
          <h5 className="white-text">
            <MapPin
              size="20"
              color="white"
              className="white-text contact-icon"
            />
            Address
          </h5>
          <p className="white-text">lorem ipsum street lagoss Nigeria</p>
          <h5 className="white-text">
            <Phone color="white" size="20" className="contact-icon" />
            Phone
          </h5>
          <p className="white-text">08110745134</p>
          <p className="white-text">08110745134</p>
          <h5 className="white-text">
            <Mail color="white" size="20" className="contact-icon" />
            Email
          </h5>
          <p className="white-text">Hivesolution@gmail.com</p>
        </div>
      </section>
    </main>
  );
};

const mapStateToProps = (state) => {
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
