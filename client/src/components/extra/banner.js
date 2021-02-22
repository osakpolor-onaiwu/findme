import React, { useEffect } from 'react';
import SearchForm from './search';

export default function Banner() {
  return (
    <main id='top-banner'>
      <div className='slides white-text'>
        <img src='./hero.png' alt='topbanner' />
        <div className='search'>
          <SearchForm />
        </div>

        <h6 className='white-text'>
          We help you get your desired service to your doorstep
        </h6>
      </div>
    </main>
  );
}
