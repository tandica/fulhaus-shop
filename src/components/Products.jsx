import "../styles/Products.scss";
import React, { useState, useRef, useEffect } from "react";

export default function Products(props) {
  const [cartItems, setCartItems] = useState([]);

  //access first image from imageURLs section in object
  const image = props.img;
  const obj = {};
  const result = Object.assign(obj, image);

  //console.log("props", props.id);

  // function update(newMode, replace) {
  //   if (replace) {
  //     setHistory((prev) => [...prev.slice(0, prev.length - 1), newMode]);
  //     console.log(newMode);
  //   } else {
  //     setHistory((prev) => [...prev, newMode]);
  //   }
  //   setCartItems(newMode);
  // }

  // update();

  // console.log("history", history);

  function addToCart(item) {
    // const cart = [...cartItems];
    // cart.push(props);
    // console.log("cart new", cart);

    // setCartItems(cart);

    const updateCart = [...cartItems, item];
    updateCart.forEach((e) => console.log("foreach", e));
    setCartItems(updateCart);
  }

  console.log("new state", cartItems);

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
