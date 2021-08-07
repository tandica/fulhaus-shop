import { useState } from "react";
import "../styles/Home.scss";

export default function Home() {
  const [product, setProduct] = useState([]);

  async function getProducts(e) {
    e.preventDefault();
    const data = await fetch(
      `https://main-api.fulhaus.com/fulhaus-tech-test/get-products`
    )
      .then((res) => res.json())
      .then(
        (data) => data
        //const productInfo = [...new Set(data.map((product) => product))];
        // console.log("INFO $$$", productInfo);
        // console.log("product data*****", data);
        // console.log("product data-----", data[0].color);
        //setProduct(productInfo);
      );
    setProduct(data);
  }
  console.log("----", product);
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
    </div>
  );
}
