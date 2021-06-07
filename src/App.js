import React, { useState } from "react";
import "./styles.css";
//import {useState} from 'react';

//let count =1;

const App = () => {
  const [count, setCount] = useState(0);

  const IncrNum = () => {
    setCount(count + 1);
    //console.log("Increment");
  };

  return (
    <div>
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button onClick={IncrNum}> Click Me</button>
    </div>
  );
};
export default App;
