import React from "react";
import './ButtonElements.css';
import Link from 'next/link';

const ButtonEffect = ({ text, linkwha }) => {
  return (
    <button className="button-effect draw meet">
      <Link className="draw meet" href={`${linkwha}`}>{text}</Link>
    </button>
  );
};

export default ButtonEffect;
