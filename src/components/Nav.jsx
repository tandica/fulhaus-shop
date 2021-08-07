import React, { useState } from "react";
import "../styles/Nav.scss";
//import Cart from "./Cart";
import { Offcanvas } from "react-bootstrap";

export default function Nav({ name, ...props }) {
  const [show, setShow] = useState(false);

  //create functions for closing and opening the cart
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <nav className="nav">
      <div className="nav-items">
        <h3 className="nav-title">Fülhaus Shop</h3>
        <button type="button" className="nav-button" onClick={handleShow}>
          CART
        </button>
        <Offcanvas show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Your Cart</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </nav>
  );
}
