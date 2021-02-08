import React, { Component } from 'react';
import { connect } from 'react-redux';
import Carousels from '../extra/carousel';
import Categories from '../extra/categories';

export class Home extends Component {
  render() {
    const { manufacturers } = this.props;
    return (
      <main>
        <section className='row carousel-section'>
          <Carousels />
        </section>

        <section className='row'>
          <div className='col  s12'>
            <Categories />
          </div>
        </section>
        <section className='row bottom-row'>
          <div className='col l12 m12 s12 '>
            <h4>
              Service Providers: {manufacturers.length} || Clients:{}
            </h4>
          </div>
        </section>
      </main>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    manufacturers: state.manufacturers.manufacturers,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);