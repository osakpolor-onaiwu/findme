import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import SearchForm from "../extra/search";
import { MessageSquare } from "react-feather";

export const ManufacturerContact = ({ sample }) => {
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

    const samplesgallary = () => {
        const samples = sample.length ? (
            sample.map((samplesItem) => {
                return (
                    <div key={samplesItem.id} className="col s6 m4 l3 xl3">
                        <div className="card center">
                            <div className="card-image center">
                                <img
                                    id="samplesImage"
                                    style={{ height: "200px" }}
                                    src={samplesItem.image}
                                    className="img-responsive "
                                />
                            </div>
                            <h6 className="center card-content">
                                {samplesItem.description}
                            </h6>
                        </div>
                    </div>
                );
            })
        ) : (
            <div className="center">
                This manufacturer does not have any samples
            </div>
        );
        return samples;
    };

    return (
        <main className="contain">
            <div className="row">
                <h5 className="center">Samples from this service provider</h5>
                {samplesgallary()}
            </div>
            <div className="row contain">
                <div className="ContactForm col s12">
                    
                    <form onSubmit={handleSubmit}>
                        <div className="center ">
                        <MessageSquare color="black" size="30" />
                        <h5>Contact this server Provider</h5>
                    </div>
                        <div className="input-field col s12 l6">
                            <input
                                required={true}
                                name="first_name"
                                onChange={handleChange}
                                type="text"
                                id="first_name"
                                className="validate"
                            />
                            <label htmlFor="first_name">First Name</label>
                        </div>
                        <div className="input-field col s12 l6">
                            <input
                                required={true}
                                name="last_name"
                                onChange={handleChange}
                                type="text"
                                id="last_name"
                                className="validate"
                            />
                            <label htmlFor="last_name">Last Name</label>
                        </div>
                        <div className="input-field col s12">
                            <input
                                required={true}
                                name="email"
                                onChange={handleChange}
                                type="email"
                                id="email"
                                className="validate"
                            />
                            <label
                                htmlFor="email"
                                data-error="wrong"
                                data-success="right">
                                Email
                            </label>
                        </div>
                        <div className="input-field col s12">
                            <input
                                required={true}
                                name="phone"
                                onChange={handleChange}
                                type="tel"
                                id="phone"
                                className="validate"
                            />
                            <label
                                htmlFor="phone"
                                data-error="wrong"
                                data-success="right">
                                Phone
                            </label>
                        </div>
                        <div className="input-field browser-default col s12">
                            <textarea
                                id="textarea1"
                                onChange={handleChange}
                                name="message"
                                className="materialize-textarea "></textarea>
                            <label htmlFor="message">
                                Describe what you want
                            </label>
                        </div>
                        <div className="input-field col s12 ">
                            <input
                                required={true}
                                name="location"
                                onChange={handleChange}
                                type="text"
                                id="location"
                                className="validate"
                            />
                            <label htmlFor="location">
                                location to deliver to
                            </label>
                        </div>

                        <button
                            className="button white-text"
                            type="submit"
                            name="action">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
};

const mapStateToProps = (state, ownprops) => {
    console.log(state.manufacturers.samples);
    let id = ownprops.match.params.manufacturerContact;
    return {
        sample: state.manufacturers.samples.filter((sample) => {
            return sample.id == id;
        }),
    };
};
const mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ManufacturerContact);