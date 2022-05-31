import React from 'react';
import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom';

// Componentes
import LoginMain from "../Pages/Login/loginMain";
import Ocorrencias from "../Pages/Ocorrencias/ocorrencias";
import Relatorios from "../Pages/Relatorios/relatorios";
import BarraLateral from "../Components/Barra-lateral/barraLateral";
import Login from "../Pages/Login/Login/login";
import CriarConta from "../Pages/Login/CriarConta/criarConta";
import EsqueciSenha from "../Pages/Login/EsqueciSenha/esqueciSenha";


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginMain />} >
            <Route path='/' element={<Login />} />
            <Route path='CriarConta' element={<CriarConta />} />
            <Route path='EsqueciSenha' element={<EsqueciSenha />} />
        </Route>
        <Route path='/HubHelp'>
          <Route path="Ocorrencias" element={<BarraLateral />} />
          <Route path="Relatorios" element={<Relatorios />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
