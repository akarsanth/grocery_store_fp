import React, { useState } from "react";
import { useDispatch } from "react-redux";
import classes from "./ProductDetails.module.css";
import { addToCart } from "../../app/features/cart/cart-actions";

// Main Component
const ProductDetails = ({ product }) => {
  console.log(product);
  const { id, images, title, description, unitPrice, hasOffer } = product;
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();

  const increaseQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decreaseQty = () => {
    setQty((prevQty) => prevQty - 1);
  };

  const addToCartHandler = () => {
    dispatch(addToCart({ productId: id, qty, priceId: unitPrice[0].id }));
  };

  return (
    <div className={classes["product-details"]}>
      <img src={images[0].imageName} alt={product.title} />

      <div className={classes.details}>
        <h2>{title}</h2>
        <h3>{description}</h3>
        <p className={classes.price}>
          Npr. {unitPrice[0].sellingPrice}
          {hasOffer && <span>Npr. {unitPrice[0].newPrice}</span>}
        </p>

        <div className="add-to-cart-box">
          <p className="qty-label">Quantity:</p>
          <div className="qty-updown">
            <button
              className="btn-qty"
              disabled={qty === 1}
              onClick={decreaseQty}
            >
              -
            </button>
            <input
              className="qty-input"
              type="number"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
              min="1"
              max={unitPrice[0]?.stock}
            />

            <button className="btn-qty" onClick={increaseQty}>
              +
            </button>
          </div>
          <button className="button" onClick={addToCartHandler}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
