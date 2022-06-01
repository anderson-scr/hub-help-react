import React from 'react';
import "./headerStyle.css";
import { useLocation } from 'react-router-dom';
import { BsBell } from "react-icons/bs";

function Header() {
  const localizacao = useLocation();

  return (
    <>
      <header id="header">
        <div id="menuEsquerda">
          <h2 id="titulo">{
            localizacao.pathname === "/HubHelp/Ocorrencias"? "Ocorrências" : "Relatorios"
          }</h2>
        </div>
        {console.log(localizacao.pathname)}
        <BsBell id='sininho'/>
      </header>
    </>
  )
}

export default Header;