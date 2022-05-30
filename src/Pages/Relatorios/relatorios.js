import React from 'react';
import "./relatoriosStyle.css";
import SelectDropDown from "../../Helpers/gerarDropdown";
import { opcoesRelatorios } from "../../Helpers/dropsDowns";
import Calendar from 'react-calendar';

function Relatorios() {
  const exemploAndarUnidade = [
    {
      Nome: "Sala",
      Opcoes: [
        "Sala 01",
        "Sala 02",
        "Sala 03",
        "Sala 04"
      ]
    },
    {
      Nome: "Unidade",
      Opcoes: [
        "Unidade 01",
        "Unidade 02",
        "Unidade 03",
        "Unidade 04"
      ]
    }
  ]

  return (
    <main>
      <div className="super-card">
        <div className='containnerDropDowns'>
          <div className="cima">
            {opcoesRelatorios.map(dropDown => {
              return <SelectDropDown key={dropDown.Nome} opcoes={dropDown}/>
            })}
          </div>

          <div className="baixo">
            {exemploAndarUnidade.map(dropDown => {
              return <SelectDropDown key={dropDown.Nome} opcoes={dropDown} /> 
            })}
          </div>
        </div>
        <div className='containnerDatas'>
          <Calendar minDate={new Date()} locale="pt-BR" className="calendario"/>
        </div>
        <button>Gerar</button>
      </div>
    </main>
  )
}

export default Relatorios;