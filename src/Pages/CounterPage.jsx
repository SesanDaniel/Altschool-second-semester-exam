import React, { useState } from "react";
import "../App.css";
import { motion } from "framer-motion";
import useCounter from "../Components/useCounter";
import NavBar from "../Components/NavBar";

//The counterPage component which is used to render all counter element on the app
const CounterPage = () => {
  const [
    count,
    handleIncrement,
    handleDecrement,
    handleReset,
    setValue,
  ] = useCounter(0);

  const handleChange = (e) => {
      setValue(+e.target.value);
  };

  //CounterPage elements to render
  return (
    <>
      <NavBar />
      <div className="container">
        <h3 className="count">{count}</h3>
        <div className="counter-buttons">
          <motion.button
            animate={{ scale: 1 }}
            initial={{ scale: 0 }}
            className="btn"
            onClick={handleIncrement}
          >
            Increment ↑
          </motion.button>
          <button className="btn" onClick={handleReset}>
            Reset ↺
          </button>
          <button className="btn" onClick={handleDecrement}>
            Decrement ↓
          </button>
        </div>
        <div className="inputField">
          <input
            type="number"
            className="counter-input"
            value={count}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
};

export default CounterPage;
