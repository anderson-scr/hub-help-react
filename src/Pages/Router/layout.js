import React from 'react';
import "./layoutStyle.css";
import { Outlet } from "react-router-dom";
import BarraLateral from '../../Components/Barra-lateral/barraLateral';
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";

function Layout() {
  return (
    <div className='App'>
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

export default Layout;