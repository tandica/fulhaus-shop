import "./App.scss";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Products />
    </div>
  );
}

export default App;
