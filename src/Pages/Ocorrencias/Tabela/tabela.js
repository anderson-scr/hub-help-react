import React, { useMemo } from "react";
import { useTable, usePagination, useSortBy } from "react-table";
import Mock_Data from "../../../Helpers/MOCK_DATA.json";
import { colunasInfo } from "./ColunasInfo/colunasInfo";
import ColunaIcones from "./ColunaIcones/colunaIcones";
import { BsSearch, BsChevronDown, BsChevronUp, BsChevronRight } from "react-icons/bs";
import "./tabelaStyle.css"

function Tabela() {
  // Usa o memo para ajudar na performance, evitando reload da data atoa
  const colunas = useMemo(() => colunasInfo, [])
  const data = useMemo(() => Mock_Data, [])

  //criando sua instancia da tabela
  const instanciaTabela = useTable({
    columns: colunas,
    data: data
  }, useSortBy, usePagination) 

  // Desestruturar o useTable para pegar as funcoes que vem nele
  const { 
    getTableProps,
    getTableBodyProps,
    headerGroups, //Informacoes do header em forma de array. Por isso usar map
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    gotoPage,
    pageCount,
    state,
    setPageSize,
    prepareRow
  } = instanciaTabela

  const { pageIndex } = state;
  
  // Funcoes e variaveis de atribuir os customizados da tabela
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
    
    return <ColunaIcones categoria={row["row"]["values"]["categoria"]} />
      
    } else if(row["column"]["Header"] === "Situacao") {
      return <div className={`fazerBackground ${situacao[row["row"]["values"]["situacao"]]["cor"]}`}> {situacao[row["row"]["values"]["situacao"]]["texto"]} </div>
    
    } else if(row["column"]["Header"] === "Acoes") {
      // Isso aqui vai ser um componente
      return `Detalhes`

    } else {
      return row.render("Cell")  
    }  
  }

  return ( 
    <>
      <div id="filtros">
        <form id="pesquisaTabela">
          <input type="text" name="pesquisa" id="inputPesquisaTabela" placeholder="Pesquisar..." />
          <BsSearch id="btnPesquisaTabela" />
        </form>

        <div id="filtrosContainner">
          <select className="form-select" aria-label="Default select example" defaultValue={'DEFAULT'}>
            <option value="DEFAULT" disabled style={{display: "none"}}>Categoria...</option>
            <option value="1">Ar Condicionado</option>
            <option value="2">Computadores</option>
            <option value="3">Eletrica</option>
            <option value="4">Estrutural</option>
            <option value="5">Hidraulica</option>
            <option value="6">Limpeza</option>
          </select>

          <select className="form-select" aria-label="Default select example" defaultValue={'DEFAULT'}>
            <option value="DEFAULT" disabled style={{display: "none"}}>Situação...</option>
            <option value="1">Em aberto</option>
            <option value="2">Em andamento</option>
            <option value="3">Concluido</option>
            <option value="4">Cancelado</option>
          </select>

          <select className="form-select" aria-label="Default select example" defaultValue={'DEFAULT'}>
            <option value="DEFAULT" disabled style={{display: "none"}}>Andar...</option>
            <option value="1">Terreo</option>
            <option value="2">Primeiro</option>
            <option value="3">Segundo</option>
            <option value="4">Terceiro</option>
          </select>

          <select className="form-select" aria-label="Default select example" defaultValue={'DEFAULT'}>
            <option value="DEFAULT" disabled style={{display: "none"}}>Sala...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>

          <p id="limparFiltros">Limpar filtros</p>

          <div id="containnerMostre">
            <p>Mostre:</p>
            <select className="form-select" id="mostreQuantidade" aria-label="Default select example" onChange={evt => setPageSize(Number(evt.target.value))}>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
            </select>
          </div>

        </div>
      </div>
      <div id="seguraTabela">
        <table {...getTableProps()} id='tabela'>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())} className={`${centralizarHeader(column["Header"])} ${column["Header"]}`}>
                    {column.render('Header')}
                    <span> {column.isSorted? (column.isSortedDesc? <BsChevronDown /> : <BsChevronUp />) : ''} </span>
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
      </div>

      {/* <!-- Bootstrap pagination --> */}
      <nav aria-label="Page navigation example" id="pagination">
        <ul className="pagination">
          <li className="page-item">
            <a className={`page-link ${canPreviousPage? '' : 'disabledPag'}`} href="#" aria-label="Previous" onClick={() => previousPage()} onMouseDown={e => e.preventDefault()}>
              <span aria-hidden="true">&laquo;</span>
              <span className="sr-only"> Anterior</span>
            </a>
          </li>
          <li className="page-item"><a className="page-link active" href="#"   onMouseDown={e => e.preventDefault()} disabled={!canPreviousPage} onClick={() => gotoPage(0)}>1</a></li>
          <li className="page-item"><a className="page-link holder">...</a></li>

          <li className="page-item"><a className="page-link" href="#" onMouseDown={e => e.preventDefault()}
          onClick={evt => gotoPage(evt.target.innerText - 1)} >{pageIndex+2 > pageCount-3? pageCount-3:pageIndex+2}</a></li>
          <li className="page-item"><a className="page-link" href="#" onMouseDown={e => e.preventDefault()}
          onClick={evt => gotoPage(evt.target.innerText - 1)} >{pageIndex+3 > pageCount-2? pageCount-2:pageIndex+3}</a></li>
          <li className="page-item"><a className="page-link" href="#" onMouseDown={e => e.preventDefault()}
          onClick={evt => gotoPage(evt.target.innerText - 1)} >{pageIndex+4 > pageCount-1? pageCount-1:pageIndex+4}</a></li>
          <li className="page-item"><a className="page-link" href="#" onMouseDown={e => e.preventDefault()}
          onClick={evt => gotoPage(evt.target.innerText - 1)} >{pageIndex+5 > pageCount? pageCount:pageIndex+5}</a></li>
          
          <li className="page-item">
            <a className={`page-link ${canNextPage? '' : 'disabledPag'}`} href="#" aria-label="Next" onClick={() => nextPage()} onMouseDown={e => e.preventDefault()} disabled={!canNextPage}>
              <span className="sr-only">Proximo </span>
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Tabela;