import { useState } from "react";

import { useAppDispatch, useAppSelector } from "../../app/hooks";

import { order, restock } from "./IceScreamSlice";

export const IcecreamView = () => {
  const [value, setValue] = useState(1);
  const dispatch = useAppDispatch();
  const numberOfIceCream = useAppSelector(
    (state) => state.iceCream.numOfIceCreams
  );
  return (
    <div>
      <h2>Number of icecream -{numberOfIceCream} </h2>
      <button
        onClick={() => {
          dispatch(order());
        }}
      >
        Order icecream
      </button>

      <input
        type="number"
        value={value}
        onChange={(e) => {
          setValue(+e.target.value);
        }}
      />

      <button onClick={() => dispatch(restock(value))}>Restock icecream</button>
    </div>
  );
};
