'use client'

import { useState, useEffect } from "react";

export default function Home() {
  const [selected, setSelected] = useState("closed");
  const [LocalStorage, setLocalStorage] = useState({});

  const LocalStoragee = () => {
    localStorage.setItem('calavera', "{isOpen: 'closed'}")
    localStorage.getItem('calavera')
  };

  useEffect(() => {
    LocalStoragee()
  }, [selected]);
  

  return (
    <>
      hola
    </>
  );
}
