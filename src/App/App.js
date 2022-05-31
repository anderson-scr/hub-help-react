import React from 'react';
import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom';

// Componentes
import LoginMain from "../Pages/Login/loginMain";
import Ocorrencias from "../Pages/Ocorrencias/ocorrencias";
import Relatorios from "../Pages/Relatorios/relatorios";
import Login from "../Pages/Login/Login/login";
import CriarConta from "../Pages/Login/CriarConta/criarConta";
import EsqueciSenha from "../Pages/Login/EsqueciSenha/esqueciSenha";
import Layout from "../Pages/Router/layout";


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginMain />} >
            <Route path='/' element={<Login />} />
            <Route path='CriarConta' element={<CriarConta />} />
            <Route path='EsqueciSenha' element={<EsqueciSenha />} />
        </Route>

        <Route path='/HubHelp' element={<Layout />} >
          <Route index path="Ocorrencias" element={<Ocorrencias />} />
          <Route path="Relatorios" element={<Relatorios />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;