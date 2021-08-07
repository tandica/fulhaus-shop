import "../styles/Products.scss";

export default function Products(props) {
  console.log("props", props);
  console.log(props.img);

  // const image = props.img;
  // console.log(image);
  // const firstImg = props.img.shift();
  // console.log(firstImg);

  //const image = [...new Set(props.img.map((item) => item[0]))];

  // for (const url of props.img) {
  //   console.log("^^^^", url);
  // }

  return (
    <div className="product-container">
      <div>{/* <img src={props.img} alt="furniture" /> */}</div>
      <div className="product-info">
        <div className="product-name">{props.name}</div>
        <div className="product-brand">{props.brand}</div>
        <div className="product-price">${props.price}</div>

        <a
          type="submit"
          href="https://www.w3schools.com"
          className="add-button"
        >
          + Add to Cart
        </a>
      </div>
    </div>
  );
}
