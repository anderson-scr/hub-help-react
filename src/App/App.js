import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Componentes
import Layout from "../Router/layout";
import LoginMain from "../Pages/Login/loginMain";
import Ocorrencias from "../Pages/Ocorrencias/ocorrencias";
import Relatorios from "../Pages/Relatorios/relatorios";
import BarraLateral from "../Components/Barra-lateral/barraLateral";
// import Header from "../../Components/Header/header";
// import Footer from "../../Components/Footer/footer";

function App() {

  return (
    <Routes>
        {/* Login publico */}
        <Route path='/Login' element={<LoginMain />} />
        
        <Route path='/' element={<Layout />}>
          <BarraLateral />
          <Route path='Ocorrencias' element={<Ocorrencias />} />
          <Route path='Relatorios' element={<Relatorios />} />
        </Route>
    </Routes>
  );
}

export default App;
