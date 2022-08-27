import React from "react";
import styled from "styled-components";
import Page from '../../components/page/page'



function AforoOficina(){



    const ContColumn= styled('div')`
    
    display: flex;
    flex-direction: column;
  `

    const ContRow= styled('div')`
    display: flex;
    flex-direction: row;
    width: 100% ;
  `

    const ContBigRow= styled(ContRow)`
    width: 100%;
    `

    const ContContadores= styled(ContColumn)`
    
    margin-top: 20px;
    padding: 50px;
    `

    const ContGlobal= styled('div')`
    width: 100% ;
  `

    const ContGrafico= styled('div')`
     width:50% ;
  `
    const ContSelect= styled(ContRow)`
       margin-top: 30px;
  `

    return(
     <ContGlobal>
      <Page />
      <ContBigRow>
        <ContGrafico> HOLA</ContGrafico>
        <ContColumn>
           <ContColumn>
              <ContSelect>
                <div>DISTRITO</div>
                <select>
                  <option>Distrito 1</option>
                  <option>Distrito 2</option>
                  <option>Distrito 3</option>
                </select>
              </ContSelect>
              <ContSelect>
                <div>OFICINA</div>
                <select>
                  <option>Oficina 1</option>
                  <option>Oficina 2</option>
                  <option>Oficina 3</option>
                </select>
                </ContSelect>
           </ContColumn>
           <ContRow>
              <ContContadores>
                <p>CAPACIDAD PERMITIDA</p>
                <p>#</p>
              </ContContadores>
              <ContContadores>
                <p>CAPACIDAD ACTUAL</p>
                <p>#</p>
              </ContContadores>
           </ContRow>
           <div>MENSAJE</div>
           <button>BUSCAR</button>
        </ContColumn>
      </ContBigRow>
     </ContGlobal>
    )
}

export default AforoOficina;