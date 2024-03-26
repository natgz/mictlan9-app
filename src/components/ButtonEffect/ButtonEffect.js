import React from "react";
import './ButtonElements.css';
import Link from 'next/link';

const ButtonEffect = ({ text , linkBtn}) => {
  const whatsapp = () => {
    window.open(linkBtn, "_blank")
  }

  return (
    <button className="button-effect draw meet" onClick={whatsapp}>
      {text}
    </button>
  );
};

export default ButtonEffect;
