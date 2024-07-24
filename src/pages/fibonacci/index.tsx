import React, { useState } from "react";
import Utils from "../../utils";

const Fibonacci: React.FC = () => {
  const [number, setNumber] = useState(0);
  const [result, setResult] = useState<[number, number] | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setResult(Utils.getFibonacciNeighbors(number));
  };

  return (
    <div>
      <h1>Fibonacci Page</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value, 10))}
        />

        <button type="submit">Calculate</button>
      </form>

      {result && (
        <div>
          Previous: {result[0]}, Next: {result[1]}
        </div>
      )}
    </div>
  );
};

export default Fibonacci;
