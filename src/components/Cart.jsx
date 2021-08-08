import Nav from "./Nav";
import Products from "./Products";

export default function Cart(props) {
  console.log("cart props", props);
  //set placement of cart to open from the left
  return <Nav placement={"end"} name={"Cart"} />;
}
