import React from 'react';

function SelectDropDown({opcoes}) {
  return (
    <div className="selectDrop">
      <label htmlFor={opcoes["Nome"]}>{opcoes["Nome"]}: </label>
      <select className="form-select" name={opcoes["Nome"]} aria-label="Default select example" defaultValue={'DEFAULT'}>
        <option value="DEFAULT" disabled style={{display: "none"}}>{opcoes["Nome"]}...</option>
        {opcoes["Opcoes"].map(opcao => {
          return (
            <option value={opcao}>
              {opcao}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default SelectDropDown;