import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Componentes
import BarraLateral from "../Components/Barra-lateral/barraLateral";
import Header from "../Components/Header/header";
import Footer from "../Components/Footer/footer";
import Tabela from "../Pages/Ocorrencias/Tabela/tabela";
import Ocorrencias from "../Pages/Ocorrencias/ocorrencias";

function App() {
  return (
    <Router>
      <div className="App">
        <BarraLateral />
        <section id="conteudo">
          <Header />
          <div className='screenChange'>
            <Routes>
              <Route path="/Ocorrencias" element={<Ocorrencias />} />
            </Routes>
          </div>
          <Footer />
        </section>

      </div>
    </Router>
  );
}

export default App;
