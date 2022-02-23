import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";

const FibNumbers = ({ x, y, n }) => {
  const [fibNumbres, setFibNumbers] = useState([x, y]);

  useEffect(() => {
    calcFibSeries();
  }, []);

  const calcFibSeries = () => {
    console.log("calc");
    let numbs = fibNumbres;
    let i = 1;
    while (i <= n) {
      console.log(i);
      console.log(getNext(i));
      numbs.push(getNext(i));
      i++;
    }

    setFibNumbers([...[], numbs]);
  };

  const getNext = (i) => {
    return fibNumbres[i] + fibNumbres[i - 1];
  };

  return (
    <>
      <Typography display="inline">
        <strong>x:</strong>
      </Typography>
      <Typography display="inline">{x} </Typography>
      <Typography display="inline">
        <strong>y:</strong>
      </Typography>
      <Typography display="inline">{y} </Typography>
      <Typography display="inline">
        <strong>n:</strong>
      </Typography>
      <Typography display="inline">{n}</Typography>
      <div className="fibResult">{fibNumbres.join(",")}</div>
    </>
  );
};

FibNumbers.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  n: PropTypes.number.isRequired,
};

export default FibNumbers;
