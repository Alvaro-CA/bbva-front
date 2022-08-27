import React from "react";
import styled from "styled-components";
import Page from '../../components/page/page'
import CircularChart from '../../components/charts/circular-chart'
import SelectBBVA from "../../components/select/select";

const Container= styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  box-sizing: border-box;
`

const ContainerChart= styled.div`
  width: 50%;
  padding: 10px 8px;
  box-sizing: border-box;
`
const ContainerFilters= styled.div`
  width: 50%;
  box-sizing: border-box;
`

const Aforo = () =>{

  const series = [44, 55, 13, 33]
  const labels = ['Apple', 'Mango', 'Orange', 'Watermelon']
  const options= ['a','b','c']

    return(
      <Page>
        <Container>
          <ContainerChart>
            <CircularChart
              type="donut"
              series={series}
              labels={labels}
            />
          </ContainerChart>
          <ContainerFilters>
            <SelectBBVA options={options}/>
          </ContainerFilters>
        </Container>
      </Page>
    )
}

export default Aforo;