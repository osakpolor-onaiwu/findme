import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'



export const Footer = () => {
    return (
        <div>
            <footer className="page-footer">
                <div className="container">
                    <div className="row">
                        <div className="col s12 m8 l6">
                            <ul>
                                <li><NavLink to='/about' className='white-text'> About Us</NavLink></li>
                                <li>
                                 <NavLink className='white-text' to='/seller'>become a service provider</NavLink>
                                </li>
                                <li><NavLink to='/contact' className='white-text' className='white-text'> Contact Us</NavLink></li>
                            </ul>
                        </div>
                        <div className="col s12 m4 l6">
                            <img style={{ height: '200px', width: '300px' }} src="./logo2.jpg" alt="logo" />
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        © 2020 Copyright Findme
                        <a className="grey-text text-lighten-4 right" href="#!">More NavLinks</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default Footer
