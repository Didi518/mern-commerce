import React from 'react';
import { Data } from '../../constants/Data';
import FlashCard from './FlashCard';

const index = () => {
  return (
    <section className="flash">
      <div className="container">
        <div className="heading f_flex">
          <i className="fa fa-bolt" />
          <h1>Ventes Flash</h1>
        </div>
        <div className="d_flex">
          {Data.productItems.map((item) => (
            <FlashCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default index;
