import React, { useState } from "react";
import Utils from "../../utils";

const Collatz: React.FC = () => {
  const [number, setNumber] = useState<number | "">("");
  const [loops, setLoops] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);

    setNumber(value);

    if (!isNaN(value) && value > 0) {
      setLoops(Utils.collatzSteps(value));
    }
  };

  return (
    <div>
      <input type="number" onChange={handleChange} value={number} />
      {loops !== null && <div>Number of Collatz loops: {loops}</div>}
    </div>
  );
};

export default Collatz;
