import React from "react";
import './ButtonElements.css';
import Link from 'next/link';

const ButtonEffect = ({ text , linkBtn}) => {
  const whatsapp = () => {
    window.open(linkBtn, "_blank")
  }

  const menu = () => {
    window.open("https://drive.google.com/file/d/1EQN5nv9a0lBtnMw9Vuc_a03G9COCSw_v/view?usp=sharing", "_blank")
  }

  return (
    <button className="button-effect draw meet" onClick={menu}>
      {text}
    </button>
  );
};

export default ButtonEffect;
