import "../styles/Products.scss";
import React, { useState, useRef, useEffect } from "react";
import Nav from "./Nav";

export default function Products(props) {
  const [cartItems, setCartItems] = useState([]);
  const [showItem, setShowItem] = useState(false);

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

  //set state to update when Add to Cart button is clicked

  function addToCart(item) {
    // const cart = [...cartItems];
    // cart.push(props);
    // console.log("cart new", cart);

    // setCartItems(cart);

    const updateCart = [...cartItems, item];
    updateCart.forEach((e) => console.log("foreach", e));
    setCartItems(updateCart);
    setShowItem(true);
  }

  console.log("showww", showItem);

  console.log("new state", cartItems);

  return (
    <div>
      {/* <div>
        <Nav
          placement={"end"}
          name={"Cart"}
          onClick={() => addToCart({ ...props })}
        />
        ;
      </div> */}
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
    </div>
  );
}
