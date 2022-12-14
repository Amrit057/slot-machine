import React from "react";
import SlotM from "./SlotMachine";
const App = () => {
  return (
    <>
      <h1 className="heading_style">
        π°Welcome to
        <span style={{ fontWeight: "bold", backgroundColor: "gray" }}>
          Slot machine
        </span>
        π°
      </h1>
      <div className="top">
        <div className="main_div">
          <SlotM x="π" y="π" z="π" />
          <hr />
          <SlotM x="π" y="π" z="π" />
          <hr />

          <SlotM x="π" y="π" z="π" />
          <hr />

          <SlotM x="π" y="π" z="π" />
          <hr />

          <SlotM x="π" y="ποΈ" z="π" />
        </div>
      </div>
    </>
  );
};

export default App;
