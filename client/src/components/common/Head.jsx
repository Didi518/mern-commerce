import React from 'react';

const Head = () => {
  return (
    <section className="head">
      <div className="container d_flex">
        <div className="left row">
          <i className="fa fa-phone" />
          <label>+33650246714</label>
          <i className="fa fa-envelope" />
          <label>kevin.ouali@gmail.com</label>
        </div>
        <div className="right row RText">
          <label>Besoin d'aide?</label>
          <label>Français</label>
          <label>EUR</label>
        </div>
      </div>
    </section>
  );
};

export default Head;
