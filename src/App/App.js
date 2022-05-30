import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Componentes
import BarraLateral from "../Components/Barra-lateral/barraLateral";
import Header from "../Components/Header/header";
import Footer from "../Components/Footer/footer";
import Ocorrencias from "../Pages/Ocorrencias/ocorrencias";
import Relatorios from "../Pages/Relatorios/relatorios";
import LoginMain from "../Pages/Login/loginMain";

function App() {
  const [login, setLogin] = useState(false);

  const verificarLogin = () => {setLogin(true)}

  if(!login) {
    return (
      <LoginMain verificarLogin={verificarLogin} />
    )
  }

  return (
    <Router>
      <div className="App">
        <BarraLateral logout={verificarLogin}/>

        <section id="conteudo">
          <Header />
          <div className='screenChange'>
            <Routes>
              <Route path="/Ocorrencias" element={<Ocorrencias />} />
              <Route path="/Relatorios" element={<Relatorios />} />
            </Routes>
          </div>
          <Footer />
        </section>

      </div>
    </Router>
  );
}

export default App;
