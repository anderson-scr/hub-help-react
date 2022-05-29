import React, { useMemo } from "react";
import { useTable, usePagination } from "react-table";
import Mock_Data from "../../../Helpers/MOCK_DATA.json";
import { colunasInfo } from "../Colunas/colunas";
import { BsSearch } from "react-icons/bs";
import "./tabelaStyle.css"

// Icones da tabela
import { ReactComponent as ArCondicionado } from "../../../Assets/Svgs/Icones_svg_tabela/arCondicionado.svg";
import { ReactComponent as Computadores } from "../../../Assets/Svgs/Icones_svg_tabela/computadores.svg";
import { ReactComponent as Eletrica } from "../../../Assets/Svgs/Icones_svg_tabela/eletrica.svg";
import { ReactComponent as Estrutural } from "../../../Assets/Svgs/Icones_svg_tabela/estrutural.svg";
import { ReactComponent as Hidraulica } from "../../../Assets/Svgs/Icones_svg_tabela/hidraulica.svg";
import { ReactComponent as Limpeza } from "../../../Assets/Svgs/Icones_svg_tabela/limpeza.svg";


function Tabela() {
  // Usa o memo para ajudar na performance, evitando reload da data atoa
  const colunas = useMemo(() => colunasInfo, [])
  const data = useMemo(() => Mock_Data, [])

  //criando sua instancia da tabela
  const instanciaTabela = useTable({
    columns: colunas,
    data: data
  }, usePagination) 

  // Desestruturar o useTable para pegar as funcoes que vem nele
  const { 
    getTableProps,
    getTableBodyProps,
    headerGroups, //Informacoes do header em forma de array. Por isso usar map
    page,
    prepareRow
  } = instanciaTabela

  
  // Funcoes e variaveis de atribuir os customizados da tabela
  const icones = {
    1: <ArCondicionado />,
    2: <Computadores />,
    3: <Eletrica />,
    4: <Estrutural />,
    5: <Hidraulica />,
    6: <Limpeza />
  }
  const situacao = {
    1: { cor: "azul", texto: "Em andamento"},
    2: { cor: "amarelo", texto: "Em aberto"},
    3: { cor: "verde", texto: "Concluido"},
    4: { cor: "vermelho", texto: "Cancelado"}
  }

  function centralizarHeader(coluna) {
    if(coluna === "Categoria" || coluna === "Acoes" || coluna === "Situacao") {
      return "centralizar"
    }
  }

  function centralizarBoldCor(coluna) {
    if(coluna === "Categoria" || coluna === "Acoes" || coluna === "Situacao") {
      return `centralizar ${ coluna ==="Acoes"? "maisDetalhes" : '' }`

    } else if(coluna === "Codigo") {
      return "bolda"
    } 
  }

  function colunaCustomizada(row) {
    if(row["column"]["Header"] === "Categoria") {
      return icones[row["row"]["values"]["categoria"]]
      
    } else if(row["column"]["Header"] === "Situacao") {
      return <div className={`fazerBackground ${situacao[row["row"]["values"]["categoria"]]["cor"]}`}> {situacao[row["row"]["values"]["categoria"]]["texto"]} </div>
    
    } else if(row["column"]["Header"] === "Acoes") {
      // Isso aqui vai ser um componente
      return "Detalhes"

    } else {
      return row.render("Cell")  
    }  
  }

  return ( 
    <main>
      <section id="tableSection">
        <div id="filtros">
          <form id="pesquisaTabela">
            <input type="text" name="pesquisa" id="inputPesquisaTabela" placeholder="Pesquisar..." />
            <BsSearch id="btnPesquisaTabela" />
          </form>

          <div id="filtrosContainner">
            <select className="form-select" aria-label="Default select example" defaultValue={'DEFAULT'}>
              <option value="DEFAULT" disabled>Categoria...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>

            <select className="form-select" aria-label="Default select example" defaultValue={'DEFAULT'}>
              <option value="DEFAULT" disabled>Situação...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>

            <select className="form-select" aria-label="Default select example" defaultValue={'DEFAULT'}>
              <option value="DEFAULT" disabled>Andar...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>

            <select className="form-select" aria-label="Default select example" defaultValue={'DEFAULT'}>
              <option value="DEFAULT" disabled>Sala...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>

            <p id="limparFiltros">Limpar filtros</p>

            <div id="containnerMostre">
              <p>Mostre:</p>
              <select className="form-select" id="mostreQuantidade" aria-label="Default select example">
                <option value="DEFAULT">10</option>
                <option value="1">20</option>
                <option value="2">30</option>
              </select>
            </div>

          </div>
        </div>

        <table {...getTableProps()} id='tabela'>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()} className={centralizarHeader(column["Header"])}>
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()}>
            {page.map(row => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(rowCell => {
                    return (
                      <td {...rowCell.getCellProps()} className={
                        centralizarBoldCor(rowCell["column"]["Header"], rowCell["value"])}> {
                        colunaCustomizada(rowCell)
                      } </td>
                    )
                  })}

                </tr>
              )
            })}
          </tbody>
        </table>
      </section>
    </main>
  )
}

export default Tabela;