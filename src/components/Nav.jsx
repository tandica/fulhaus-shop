import "../styles/Nav.scss";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-items">
        <h3 className="nav-title">Fülhaus Shop</h3>
        <button type="button" className="nav-button">
          CART
        </button>
      </div>
    </nav>
  );
}
