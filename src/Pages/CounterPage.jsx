import React, { useState } from "react";
import { motion } from "framer-motion";
// import useCounter from "../Components/useCounter";

//The counterPage component which is used to render all counter element on the app
const CounterPage = () => {
  // const useCounter = (props) => {
    const [value, setValue] = useState(0);

    //function to handle Increment of counter
    const handleIncrement = () => {
      setValue(value + 1);
    };

    //function to handle counter decrement
    const handleDecrement = () => {
      setValue(value - 1);
    };

    //function to reset counter to default === 0
    const handleReset = () => {
      setValue(0);
    };
  //   return [value, handleIncrement, handleDecrement, handleReset];
  // };

  // const [count, handleIncrement, handleDecrement, handleReset, value] =
  //   useCounter(0);

  console.log(value);
  const validateInput = () => {};

  //CounterPage elements to render
  return (
    <div className="container">
      <h3 className="count">{value}</h3>
      <div className="counter-buttons">
        <motion.button
          animate={{ scale: 1 }}
          initial={{ scale: 0 }}
          className="btn"
          onClick={handleIncrement}
        >
          {" "}
          Increment ↑{" "}
        </motion.button>
        <button className="btn" onClick={handleReset}>
          {" "}
          Reset α{" "}
        </button>
        <button className="btn" onClick={handleDecrement}>
          {" "}
          Decrement ↓{" "}
        </button>
      </div>
      <div className="inputField">
      <input type="text" className="counter-input" value={value} onChange={(e) => {
        setValue(+e.target.value)
      }} />
      </div>
    </div>
  );
};

export default CounterPage;
