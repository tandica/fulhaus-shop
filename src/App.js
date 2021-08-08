import "./App.scss";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Cart />
    </div>
  );
}

export default App;
