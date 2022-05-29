import React from 'react';
import "./colunaIconesStyle.css"

import { ReactComponent as ArCondicionado } from "../../../../Assets/Svgs/Icones_svg_tabela/arCondicionado.svg";
import { ReactComponent as Computadores } from "../../../../Assets/Svgs/Icones_svg_tabela/computadores.svg";
import { ReactComponent as Eletrica } from "../../../../Assets/Svgs/Icones_svg_tabela/eletrica.svg";
import { ReactComponent as Estrutural } from "../../../../Assets/Svgs/Icones_svg_tabela/estrutural.svg";
import { ReactComponent as Hidraulica } from "../../../../Assets/Svgs/Icones_svg_tabela/hidraulica.svg";
import { ReactComponent as Limpeza } from "../../../../Assets/Svgs/Icones_svg_tabela/limpeza.svg";

function ColunaIcones({categoria}) {

  const icones = {
    1: [<ArCondicionado />, "Ar Condicionado"],
    2: [<Computadores />, "Computadores"],
    3: [<Eletrica />, "Eletrica"],
    4: [<Estrutural />, "Estrutural"],
    5: [<Hidraulica />, "Hidraulica"],
    6: [<Limpeza />, "Limpeza"]
  }


  return (
    <div id='icone' data-tooltiptext = {icones[categoria][1]}>
      {icones[categoria][0]}
    </div>
  )
}

export default ColunaIcones;