import React, { useState } from "react";

const useCounter = (props) => {
  const [value, setValue] = useState(props);

  //function to handle Increment of counter
  const handleIncrement = () => {
    setValue((prev) => ++prev);
  };

  //function to handle counter decrement
  const handleDecrement = () => {
    setValue((prev) => --prev);
  };

  //function to reset counter to default === 0
  const handleReset = () => {
    setValue(0);
  };

  const setCount = (num) => {
    setCount(num);
  };

  return [
    value,
    handleIncrement,
    handleDecrement,
    handleReset,
    setCount,
    setValue,
  ];
};

export default useCounter;
