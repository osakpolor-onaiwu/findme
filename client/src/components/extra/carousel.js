import React, { useEffect } from 'react';
import SearchForm from '../extra/search';

export default function Carousels() {
  return (
    <main id='top-banner'>
      <div className='slides white-text'>
        <img src='./Banner.jpg' alt='topbanner' />
        <div className='search'>
          <SearchForm />
        </div>

        <h6 className='white-text'>
          We make getting your desired service a piece of cake
        </h6>
      </div>
    </main>
  );
}
