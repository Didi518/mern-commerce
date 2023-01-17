import Rating from '@mui/material/Rating';

const FlashCard = ({ product, addToCart }) => {
  return (
    <div className="product_container">
      <div className="product mtop">
        <div className="img">
          <span className="discount">-{product.discount}%</span>
          <img src={product.cover} alt={product.name} />
        </div>
        <div className="product-details">
          <h3>{product.name}</h3>
          <Rating
            name="half-rating"
            defaultValue={product.rating}
            precision={0.5}
          />
          <div className="price">
            <h4>{product.price}€</h4>
            <button onClick={() => addToCart(product)}>
              <i className="fa fa-plus" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashCard;
