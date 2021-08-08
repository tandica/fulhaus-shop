import "../styles/Products.scss";
import React, { useState } from "react";

export default function Products(props) {
  const [cartItems, setCartItems] = useState([]);
  const [showItem, setShowItem] = useState(false);

  //access first image from imageURLs section in object
  const image = props.img;
  const obj = {};
  const result = Object.assign(obj, image);

  //set state to update when Add to Cart button is clicked
  function addToCart(item) {
    const updateCart = [...cartItems, item];
    updateCart.forEach((e) => console.log("foreach", e));
    setCartItems(updateCart);
    setShowItem(true);
  }

  return (
    <div className="product-container">
      <img src={result[0]} alt="furniture" className="image" />
      <div className="product-info">
        <div className="product-name">{props.name}</div>
        <div className="product-brand">{props.brand}</div>
        <div className="product-price">${props.price}</div>

        <button
          type="submit"
          className="add-button"
          onClick={() => addToCart({ ...props })}
        >
          + Add to Cart
        </button>
      </div>
    </div>
  );
}
