import React, { useRef, useState, useEffect } from 'react';
import './barraLateralStyle.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { ReactComponent as LogoHubHelp } from "../../Assets/Svgs/hub-help-logo-branca.svg";
import { BsReverseLayoutTextSidebarReverse, BsJournalText, BsBoxArrowLeft } from "react-icons/bs";


function BarraLateral() {
  const [posicao, setPosicao] = useState();
  const indicadorSelecionado = useRef(null);
  const ocorrencias = useRef(null);
  const relatorios = useRef(null);
  const localizacao = useLocation();

  useEffect(() => {
    moverIndicador()
  }, [localizacao]);

  const moverIndicador = () => {
    localizacao.pathname === "/HubHelp/Ocorrencias"? setPosicao(ocorrencias.current["offsetTop"]) : setPosicao(relatorios.current["offsetTop"])
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
          <Link to="Ocorrencias" className="opcao" id="ocorrencias" ref={ocorrencias}>
            <BsReverseLayoutTextSidebarReverse className='icone' />
            Ocorrencias
          </Link>

          <Link to="Relatorios" className="opcao" id="relatorios" ref={relatorios}>
            <BsJournalText className='icone' />
            Relatorios
          </Link>
        </nav>
      </section>

      <Link to="/" className="opcao" id="logout">
        <BsBoxArrowLeft className='icone' />
        Logout
      </Link>
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
