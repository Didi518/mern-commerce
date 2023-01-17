import { Link } from 'react-router-dom';
import assets from '../../assets';

const Search = () => {
  const handleKeyDown = (e) => {};

  return (
    <section className="search">
      <div className="container c_flex">
        <div className="logo width">
          <img src={assets?.images?.logo} alt="logo" />
        </div>
        <div className="search-box f_flex">
          <i className="fa fa-search" />
          <input
            type="text"
            placeholder="Recherchez et découvrez"
            onKeyDown={handleKeyDown}
          />
          <span>Par catégories</span>
        </div>
        <div className="icon f_flex width">
          <div className="cart">
            <Link to="/panier">
              <i className="fa fa-shopping-cart icon-circle" />
              <span>0</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
