import React from 'react';
import Category from './Category';
import SliderHome from './SliderHome';

const index = () => {
  return (
    <section className="home">
      <div className="container d_flex">
        <Category />
        <SliderHome />
      </div>
    </section>
  );
};

export default index;
