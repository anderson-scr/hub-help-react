import React from 'react';
import "./loginMainStyle.css";
import logo_senac from "../../Assets/Imgs/senac_hub.png";
import { Outlet, NavLink } from 'react-router-dom';
import { ReactComponent as LogoHubHelp } from "../../Assets/Svgs/hub-help-logo-branca.svg";

function LoginMain() {

  return (
    <div className='background'>
      <header className='topo'>
        <div className="logo">
          <LogoHubHelp id='logo_HubHelp'/>
          <h1 className='nomeLogo'>HUB HELP</h1>
        </div>
        <div className="grid-covid">
          <div className="covid"></div>
          <div className="covid meio"></div>
          <div className="covid"></div>
          <div className="covid meio"></div>
        </div>
      </header>
      
      <div className='seguraMainLogin'>
        <main className='mainLogin'>
          <div className="opcoes-login">
            <NavLink to="/" className="botao" id="login" >LOGIN</NavLink>
            <NavLink to="/CriarConta" className="botao" id="criar-conta">CRIAR CONTA</NavLink>
          </div>

          <div className='meio'>
            <Outlet />
          </div>

          <div className="img-container">
            <img src={logo_senac} alt="Senac Hub Academy logo" />
          </div>
        </main>
      </div>
      
      <footer className='rodaPe'>
        <div className="grid-covid">
          <div className='base'>
            <div className="covid"></div>
            <div className="covid"></div>
          </div>

          <div className='base'>
            <div className="brabo covid"></div>
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