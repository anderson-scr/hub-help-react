import React from 'react';
import "./cardsStyle.css";
import { BsJournalText } from "react-icons/bs";


function Cards(props) {

  return (
    <div id="ocorrenciasDiarias" className="card">
      <div className="tituloContainner">
        <h3>{props.titulo}</h3>
        <div className="iconeBackground">
          <BsJournalText id='iconesCard'/>
        </div>
      </div>
      <div className="infoContainners">
        <h2>{props.valor}</h2>
        <p>{props.data}</p>
      </div>
    </div>
  )
}

export default Cards