import React from 'react';
import "./loginStyle.css";
import { Link } from 'react-router-dom';

function Login() {

  return (
    <>
      <div className="form-login form-pequeno form">
        <input type="text" name="matricula" id="matricula" placeholder="NÚMERO DA MATRÍCULA" maxLength="8" />
        <input type="password" name="senha" id="senha" placeholder="SENHA" maxLength="16" />

        <Link to="/HubHelp/Ocorrencias" className="submit-button" id="login"> Login </Link>
      </div>
      <Link to="/EsqueciSenha" id="esqueci-senha">Esqueci minha senha</Link>
    </>
  )
}

export default Login;