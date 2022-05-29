import React from 'react';
import "./headerStyle.css";
import { BsBell } from "react-icons/bs";

function header() {
  return (
    <>
      <header id="header">
        <div id="menuEsquerda">
          <h1 id="titulo">Minha Dashboard</h1>
        </div>

        <BsBell id='sininho'/>
      </header>
    </>
  )
}

export default header;