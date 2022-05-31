import React from 'react';
import "./criarConta.css";

function CriarConta() {
  return (
    <>
      <div className="form-grande form">
        <input type="text" name="matricula" placeholder="NÚMERO MATRÍCULA" maxLength="8" />
        <input type="email" name="email" placeholder="E-MAIL" maxLength="50" />
        <input type="password" name="senha" placeholder="SENHA" maxLength="16" />
        <input type="password" name="confirma_senha" placeholder="CONFIRME SUA SENHA" maxLength="16" />

        <button type="submit" className="submit-button" value="CRIAR CONTA" id="submit-criar-conta">Criar Conta</button>
      </div>
    </>
  )
}

export default CriarConta;