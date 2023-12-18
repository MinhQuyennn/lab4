import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import "./style.scss";

const React3 = () => {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div class="react3">
      <div className="result">{counter}</div>
      <Button onClick={increaseCounter} size="lg">
        Click
      </Button>
    </div>
  );
};

export default React3;
