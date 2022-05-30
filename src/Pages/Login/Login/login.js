import React from 'react';
import "./loginStyle.css";

function Login({ logar }) {
  
  function entrar(evt) {
    evt.preventDefault()
    logar()
  }

  return (
    <>
      <form action="#" className="form-login form-pequeno">
        <input type="text" name="matricula" id="matricula" placeholder="NÚMERO DA MATRÍCULA" maxLength="8" />
        <input type="password" name="senha" id="senha" placeholder="SENHA" maxLength="16" />

        <input type="submit" className="submit-button" value="LOGIN" id="login" onClick={evt => entrar(evt)}/>
      </form>
      <button id="esqueci-senha">Esqueci minha senha</button>
    </>
  )
}

export default Login;