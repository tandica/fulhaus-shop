import { useState } from "react";
import "../styles/Products.scss";

export default function Products() {
  const [product, setProduct] = useState();

  function getProducts() {
    //e.preventDefault();
    const data = fetch(
      `https://main-api.fulhaus.com/fulhaus-tech-test/get-products`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("product data*****", data);
      });
  }

  console.log(getProducts());

  return (
    <div>
      <div>products</div>
    </div>
  );
}
