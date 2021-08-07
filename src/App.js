import "./App.scss";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Products from "./components/Products";
import CartShow from "./components/CartShow";
import { Offcanvas } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Products />

      <CartShow />
    </div>
  );
}

export default App;
