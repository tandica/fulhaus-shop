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
      <div>{props.brand}</div>
      <div>{props.name}</div>
      <div>{props.price}</div>
      <div>
        <button type="submit" className="add-button">
          + Add to Cart
        </button>
      </div>
    </div>
  );
}
