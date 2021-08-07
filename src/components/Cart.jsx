import React, { useState } from "react";
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from "react-offcanvas";
import { Offcanvas } from "react-bootstrap";

export default function Cart() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button variant="primary" onClick={handleShow}>
        Launch
      </button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );

  // componentWillMount() {
  //   // sets the initial state
  //   this.setState({
  //     isMenuOpened: false
  //   });
  // }

  //   const [cart, setCart] = useState(false);

  //   // function toggle() {
  //   //   if (cart) {

  //   //   }
  //   // }

  //   return (
  //     <OffCanvas
  //       width={300}
  //       transitionDuration={300}
  //       effect={"parallax"}
  //       isMenuOpened={cart}
  //       position={"right"}
  //     >
  //       <OffCanvasBody className="canvas" style={{ fontSize: "30px" }}>
  //         <p>This is the main body container.</p>
  //         <p>
  //           <a href="#">Click here</a> to toggle the menu.
  //         </p>
  //       </OffCanvasBody>
  //       <OffCanvasMenu className="list">
  //         <p>Placeholder content.</p>
  //         <ul>
  //           <li>Link 1</li>
  //           <li>Link 2</li>
  //           <li>Link 3</li>
  //           <li>Link 4</li>
  //           <li>Link 5</li>
  //           <li>
  //             <a href="#">Toggle Menu</a>
  //           </li>
  //         </ul>
  //       </OffCanvasMenu>
  //     </OffCanvas>
  //   );
  // }

  // // handleClick() {
  // //   // toggles the menu opened state
  // //   // this.setState({ isMenuOpened: !this.state.isMenuOpened });
}
