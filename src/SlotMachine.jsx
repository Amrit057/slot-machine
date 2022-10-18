import React from "react";
import If from "./If";
import Else from "./Else";
const SlotM = (props) => {
  let { x, y, z } = props;

  if (x === y && y === z) {
    return <If />;
  } else {
    return <Else />;
  }
};

export default SlotM;
