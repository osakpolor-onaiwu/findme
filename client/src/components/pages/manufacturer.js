import React, { Component } from "react";
import { connect } from "react-redux";
import { ArrowRight, X, Compass, Mail, Phone } from "react-feather";
import SearchForm from "../extra/search";
import { NavLink } from "react-router-dom";

export class Manufacturers extends Component {
    render() {
        const { manufacturers } = this.props;
        const eachmanufacturer = manufacturers.length ? (
            manufacturers.map((manufacturer) => {
                return (
                    <div key={manufacturer._id} className="col s12 m6 l4">
                        <div className="card-panel transparent manufacturer black-text ">
                            <h3> {manufacturer.name} </h3>
                            <h6>
                                <strong>Address</strong>: {manufacturer.address}
                            </h6>
                            <h6>
                                <strong>state</strong>: {manufacturer.state}
                            </h6>
                            <h6>
                                <strong>city</strong>: {manufacturer.city}
                            </h6>

                            <NavLink
                                className="manufacturer-button white-text"
                                to={`/manufacturer/${manufacturer._id}`}>
                                Contact this Service Provider
                            </NavLink>
                        </div>
                    </div>
                );
            })
        ) : (
            <div className="contain">No manufacturers in this category yet</div>
        );
        return (
            <main>
                <section className="row contain">
                    <SearchForm />
                    {eachmanufacturer}
                </section>
                <section className="row bottom-row">
                    <img src="./lines.png" alt="" />
                </section>
            </main>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    let categoryname = ownProps.match.params.manufacturer;

    return {
        manufacturers: state.manufacturers.manufacturers.filter(
            (manufacturer) => {
                return manufacturer.category.name == categoryname;
            }
        ),
    };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Manufacturers);
