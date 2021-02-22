import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

export default function Carousel() {
  return (
    <main className='carousel'>
      <section className='right-side col s12  l8'>
        <OwlCarousel
          items='1'
          className='owl-theme'
          nav
          dots
          autoPlay={true}
          autoplaySpeed={5000}
          animateIn={true}
          autoplayHoverPause={true}
          loop
        >
          <img src='./sit.jpg' alt='abc' />
          <img src='./abc.jpg' alt='abc' />
        </OwlCarousel>
      </section>
      <section className='left-side col l4 hide-on-med-and-down'>
        <img src='./abc.jpg' alt='abc' />
      </section>
    </main>
  );
}
