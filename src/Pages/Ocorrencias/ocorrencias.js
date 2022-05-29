import React from 'react'
import "./ocorrenciasStyle.css";
import Tabela from "./Tabela/tabela"

// import card component
import Cards from "./Cards/cards";

function Ocorrencias() {
  return (
    <main>
      <section id='cardsSection'>
        <Cards titulo="Ocorrências Diárias" data="15/02/2022" valor="10"/>
        <Cards titulo="Ocorrências Semanais" data="15/02/2022" valor="30"/>
        <Cards titulo="Ocorrências Mensais" data="15/02/2022" valor="150"/>
      </section>
      
      <section id="tableSection">
        <Tabela />
      </section>
    </main>
  )
}

export default Ocorrencias;