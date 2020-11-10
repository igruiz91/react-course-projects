import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ weight, rgb, index, hex }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(false);
    }, 5000);

    return () => {
      clearTimeout(timer)
    }
  }, [alert])
  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      key={index}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hex);
      }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hex}</p>
      {alert && <p className='alert'>copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
