import React from "react";
import './ButtonElements.css';

const ButtonEffect = ({ text }) => {
  return (
    <button className="button-effect draw meet">
      {text}
    </button>
  );
};

const ButtonEffect2 = ({ text }) => {
  return (
    <button className="block">
      {text}
    </button>
  );
};

export default ButtonEffect;
