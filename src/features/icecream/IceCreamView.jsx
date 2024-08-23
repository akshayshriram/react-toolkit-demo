import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";

const IceCreamView = () => {
  const [value, setValue] = useState(1);
  const numOfIceCream = useSelector((state) => state.icecream.numOfIceCream);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of Ice Creams : {numOfIceCream}</h2>
      <button onClick={() => dispatch(ordered())}>Order Ice Cream</button>
      <input
        type="number"
        name=""
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
        id=""
      />
      <button onClick={() => dispatch(restocked(value))}>
        Restore Ice Creams
      </button>
    </div>
  );
};

export default IceCreamView;
