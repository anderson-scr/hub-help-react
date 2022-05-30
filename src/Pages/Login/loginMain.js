import React from 'react';
import "./loginMainStyle.css";
import logo_senac from "../../Assets/Imgs/senac_hub.png";
import { ReactComponent as LogoHubHelp } from "../../Assets/Svgs/hub-help-logo-branca.svg";
import Login from "./Login/login";


function LoginMain({ verificarLogin }) {

  return (
    <div className='background'>

      <header className='topo'>
        <div className="logo">
          <LogoHubHelp id='logo_HubHelp'/>
          <h1>HUB HELP</h1>
        </div>
        <div className="grid-covid">
          <div className="covid"></div>
          <div className="covid meio"></div>
          <div className="covid"></div>
          <div className="covid meio"></div>
        </div>
      </header>

      <main className='mainLogin'>
        <div className="opcoes-login">
          <button className="botao" id="login" data-op-atual >LOGIN</button>
          <button className="botao" id="criar-conta">CRIAR CONTA</button>
        </div>

        <div div className='meio'>
          <Login logar={ verificarLogin }/>
        </div>

        <div className="img-container">
          <img src={logo_senac} alt="Senac Hub Academy logo" />
        </div>
      </main>
      
      <footer className='rodaPe'>
        <div className="grid-covid">
          <div className='base'>
            <div className="covid"></div>
            <div className="covid"></div>
          </div>

          <div className='base'>
            <div className="covid brabo"></div>
          </div>

          <div className='base'>
            <div className="covid"></div>
            <div className="covid"></div>
          </div>
          <div className="covid incomoda2"></div>
          <div className="covid incomoda"></div>
        </div>
      </footer>
    </div>
  )
}

export default LoginMain;