import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Timer = ({ date }) => {
  return (
    <>
      <p>
        {date.toLocaleString("es-co", {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: false,
        })}
      </p>
    </>
  );
};

Timer.propTypes = {
  date: PropTypes.instanceOf(Date),
};

export default Timer;
