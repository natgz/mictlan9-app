import React from "react";
import './ButtonElements.css';
import Link from 'next/link';

const ButtonEffect2 = ({ text }) => {
  return (
    <button className="block">
      <Link className="NavBtnLink2 " href="/calavera">{text}</Link>
    </button>
  );
};

export default ButtonEffect2;