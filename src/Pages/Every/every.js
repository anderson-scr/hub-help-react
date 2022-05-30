import React from 'react';
import { Outlet } from 'react-router-dom';

// Components
import BarraLateral from "../../Components/Barra-lateral/barraLateral";
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import Ocorrencias from "../../Pages/Ocorrencias/ocorrencias";
import Relatorios from "../../Pages/Relatorios/relatorios";

function Every() {
  return (
    <div className="App">
      <BarraLateral />
      <section id="conteudo">
        <Header />
        <div className='screenChange'>
          <Outlet />
        </div>
        <Footer />
      </section>
  </div>
  )
}

export default Every;