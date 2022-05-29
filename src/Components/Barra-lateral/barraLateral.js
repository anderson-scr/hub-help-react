import React, { useRef, useState } from 'react';
import './barraLateralStyle.css';
import { ReactComponent as LogoHubHelp } from "../../Assets/Svgs/hub-help-logo-branca.svg";
import { BsReverseLayoutTextSidebarReverse, BsJournalText, BsBoxArrowLeft } from "react-icons/bs";


function BarraLateral() {
  const [posicao, setPosicao] = useState();
  const indicadorSelecionado = useRef(null)

  const moverIndicador = (evt) => {
    evt.preventDefault();
    setPosicao(evt.currentTarget.offsetTop)
  }

  return (
    <>
    <aside id='barraLateral'>
      <section id="blocosSuperiores">
        <div className="covid"></div>
        <div className="covid covidMeio"></div>
        <div className="covid"></div>
      </section>

      <section id="centro">
        <LogoHubHelp id="logoHubHelp"/>
        <nav id="navegacao">
          <div id='selecionado' ref={indicadorSelecionado} style={{top: posicao}}></div>
          <a href="" className="opcao" id="ocorrencias" onClick={evt => {moverIndicador(evt)}}>
            <BsReverseLayoutTextSidebarReverse className='icone' />
            Ocorrencias
          </a>
          <a href="" className="opcao" id="relatorios" onClick={evt => {moverIndicador(evt)}}>
            <BsJournalText className='icone' />
            Relatorios
          </a>
        </nav>
      </section>

      <a href="" className="opcao" id="logout">
        <BsBoxArrowLeft className='icone' />
        Logout
      </a>
      <section id="blocosInferiores">
        <div className="covid"></div>
        <div className="covid covidMeio"></div>
        <div className="doubleCovid">
          <div className="covid"></div>
          <div className="covid"></div>
        </div>
      </section>
    </aside>
    </>
  )
}

export default BarraLateral;
