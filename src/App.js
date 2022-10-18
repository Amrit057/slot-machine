import React from "react";
import SlotM from "./SlotMachine";
const App = () => {
  return (
    <>
      <h1 className="heading_style">
        🎰Welcome to
        <span style={{ fontWeight: "bold", backgroundColor: "gray" }}>
          Slot machine
        </span>
        🎰
      </h1>
      <div className="top">
        <div className="main_div">
          <SlotM x="😄" y="😄" z="😄" />
          <hr />
          <SlotM x="😄" y="😆" z="😄" />
          <hr />

          <SlotM x="🍌" y="🍎" z="🍌" />
          <hr />

          <SlotM x="🚗" y="🚗" z="🚗" />
          <hr />

          <SlotM x="📖" y="🖊️" z="📚" />
        </div>
      </div>
    </>
  );
};

export default App;
