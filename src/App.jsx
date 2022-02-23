import React, { useState, useEffect } from "react";
import "./App.css";
import Timer from "./components/Timer/Timer";
import { Button } from "@mui/material";
import FibNumbers from "./components/fibNumbres/FibNumbers";
function App() {
  const [dateState, setDateState] = useState(new Date());
  const [showFib, setShowFib] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [n, setN] = useState(0);

  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000);
  }, []);

  const getFibSerie = () => {
    setShowFib(false);
    let mins = String(dateState.getMinutes());
    console.log(mins);
    if (mins.length == 2) {
      setX(Number(mins[0]));
      setY(Number(mins[1]));
    } else {
      setX(0);
      setY(Number(mins[0]));
    }
    setN(dateState.getSeconds());
    setShowFib(true);
  };

  return (
    <div className="App">
      <h1>Fibonacci-App</h1>
      <h5>Bienvenido a su generador de numeros Fibonacci</h5>
      <h2>
        <Timer date={dateState}></Timer>
      </h2>
      <Button variant="contained" onClick={getFibSerie}>
        Generar serie
      </Button>
      <div>
        {showFib ? <FibNumbers key={n} x={x} y={y} n={n}></FibNumbers> : <></>}
      </div>
    </div>
  );
}

export default App;
