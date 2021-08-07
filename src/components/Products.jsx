import "../styles/Products.scss";

export default function Products(props) {
  console.log("props", props);
  console.log("typeeee", typeof props.img);
  //console.log("img data", props.img);

  const image = props.img;
  console.log("image", image);

  // console.log("TESTING****", Object.keys(props.img));

  const obj = {};

  const result = Object.assign(obj, image);
  console.log("result", result);
  console.log("result---->", result[0]);
  //console.log("TESTING****", Object.keys(result)[0]);

  //const firstObj = result.shift();
  //console.log("checkkkk", firstObj);
  // const firstImg = props.img.shift();
  // console.log(firstImg);

  //const image = [...new Set(props.img.map((item) => item[0]))];

  // for (const url of props.img) {
  //   console.log("^^^^", url);
  // }

  return (
    <div className="product-container">
      <img src={result[0]} alt="furniture" className="image" />

      <div className="product-info">
        <div className="product-name">{props.name}</div>
        <div className="product-brand">{props.brand}</div>
        <div className="product-price">${props.price}</div>

        <button type="submit" className="add-button">
          + Add to Cart
        </button>
      </div>
    </div>
  );
}
