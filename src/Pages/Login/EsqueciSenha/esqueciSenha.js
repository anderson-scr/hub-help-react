import React from 'react';
import "./esqueciSenhaStyle.css";

function EsqueciSenha() {
  return (
    <div id='esqueciSenha'>
      <h2 id='tEsqueciSenha'>ESQUECI A SENHA</h2>

      <p id='pEsqueciSenha'>Para redefinir sua senha, informe o email cadastrado na sua conta.</p>
      <div className='form' id='enviarSenha'>
        <input type="text" name="email" id="email-envio" placeholder="DIGITE SEU E-MAIL" maxlength="50" />
        <button type="submit" class="submit-button" id="enviar-email">Enviar</button>
      </div>
    </div>
  )
}

export default EsqueciSenha;