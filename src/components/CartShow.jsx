import Cart from "./Cart";

export default function placement() {
  return (
    <>
      <Cart placement={"end"} />
      {/* {["end"].map((placement, idx) => (
        <Cart key={idx} placement={"end"} />
      ))} */}
    </>
  );
}
