import React from "react";
import logo_senac from "../../Assets/Imgs/senac_hub.png";
import "./footerStyle.css";

function header() {
  return (
    <footer id="footer">
      <p id="rodapeFabrica">Fabrica de Software - Turma 56 (2021-2022)</p>
      <img src={logo_senac} id="logoSenac" alt="Logo Senac Hub Academy"></img>
    </footer>
  )
}

export default header;