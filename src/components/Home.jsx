import { useState } from "react";
import "../styles/Home.scss";
import Products from "./Products";

export default function Home() {
  const [product, setProduct] = useState([]);

  //get product info from api
  async function getProducts(e) {
    e.preventDefault();
    const data = await fetch(
      `https://main-api.fulhaus.com/fulhaus-tech-test/get-products`
    )
      .then((res) => res.json())
      .then((data) => data);
    //set state for products
    setProduct(data);
  }

  //display product info on page
  function displayProduct() {
    const productToDisplay = [
      ...new Set(
        product.map((product, index) => (
          <Products
            key={index}
            img={product.imageURLs}
            name={product.vendorProductName}
            brand={product.vendorName}
            price={product.MSRP}
          />
        ))
      ),
    ];
    return productToDisplay;
  }

  return (
    <div>
      <div className="home-container"></div>
      <div className="home-title">
        <h1>Patio Furniture</h1>
        <button
          type="submit"
          className="home-button"
          onClick={(e) => getProducts(e)}
        >
          SHOP
        </button>
      </div>
      <div>{displayProduct()}</div>
    </div>
  );
}
