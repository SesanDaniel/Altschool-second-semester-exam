import React, { useState } from "react";

//The counterPage component which is used to render all counter element on the app
const CounterPage = () => {
  //Declaring a useState Hook to handle state changes
  const [count, setCount] = useState(0);

  //function to handle Increment of counter
  const handleIncrement = () => {
    setCount(count + 1);
  };

  //function to handle counter decrement
  const handleDecrement = () => {
    setCount(count - 1);
  };

  //function to reset counter to default === 0
  const handleReset = () => {
    setCount(0);
  };

  const validateInput = () => {
    
  }

  //CounterPage elements to render
  return (
    <div className="container">
      <h3 className="count">{count}</h3>
      <div className="counter-buttons">
        <button className="btn" onClick={handleIncrement}>
          {" "}
          Increment ↑{" "}
        </button>
        <button className="btn" onClick={handleReset}>
          {" "}
          Reset α{" "}
        </button>
        <button className="btn" onClick={handleDecrement}>
          {" "}
          Decrement ↓{" "}
        </button>
      </div>
      <input
        type="text"
        className="counter-input"
        placeholder="You can input a random integer here"
      />
    </div>
  );
};

export default CounterPage;
