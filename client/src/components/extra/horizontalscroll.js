import React from 'react';
import { connect } from 'react-redux';
import HScrollGrid from 'react-horizontal-scroll-grid';

export const HorizontalScroll = (props) => {
  return (
    <HScrollGrid
      gridWidth={1200}
      gridHeight={300}
      cardWidth={250}
      backgroundColor='antiquewhite'
    >
      <li>Test</li>
      <li>Test</li>
      <li>Test</li>
      <li>Test</li>
      <li>Test</li>
    </HScrollGrid>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HorizontalScroll);
