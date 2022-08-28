import React from "react";
import styled, { keyframes } from "styled-components";
import Page from '../../components/page/page'
import Ubi from "./components/ubi";
import map from '../../assets/images/map.png'
import iconMap from '../../assets/images/icon_map.png'
import agency from '../../assets/images/agency.png'
import axios from "axios";

const Container= styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
`

const ContainerChart= styled.div`
  width: 80%;
  padding: 10px 30px;
  box-sizing: border-box;
  margin: 20px 0;
`
const TableWrapper= styled.table`
  width: 100%;
  background: ${props => props.th}
`
const TableHeaders= styled.tr`
  background: #1973b8;
  color: white;
`
const TableBody= styled.tr`
  text-align: center;
`
const THead = styled.th`
  border-radius: 15px;
  padding: 3px 4px;
`
const TBody = styled.td`
  padding: 8px;
`

const ContainerBottom = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center:
`
const ContainerMap = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StatusRed = styled.div`
  border-radius: 50%;
  background: red;
  width: 15px;
  height: 15px;
  box-sizing: border-box;
  margin: auto;
`
const StatusAmbar = styled.div`
  border-radius: 50%;
  background: #efaf2e;
  width: 15px;
  height: 15px;
  box-sizing: border-box;
  margin: auto;
`
const StatusGreen = styled.div`
  border-radius: 50%;
  background: green;
  width: 15px;
  height: 15px;
  box-sizing: border-box;
  margin: auto;
`

const ImageMap = styled.img`
  width: 100%;
  margin: 0 20px;
  border-radius: 30px;
  box-sizing: border-box;
  box-shadow: 0 3px 6px rgb(0 0 0 / 16%), 0 3px 6px rgb(235 235 235 / 32%);
`
const ContainerHeader = styled.div`
  width: 80%; 
  display: flex;
  justify-content: space-between;
  align-items;
  box-sizing: border-box;
`
const Agency = styled.div`
  width: 45%;
  box-sizing: border-box;
  border-radius: 20px;
  background: white;
  margin: 10px 20px;
  padding: 0 20px;
  box-shadow: 0 3px 6px rgb(0 0 0 / 16%), 0 3px 6px rgb(235 235 235 / 32%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-left: 15px solid #ff9090;
`
const AgencyText = styled.p`
  color: #1973b8;
  font-size: 30px;
  padding: 0;
  margin: 8px 0;
  box-sizing: border-box;
`
const WrapperTitle = styled.h5`
  margin: 0;
`
const InfoAgency = styled.h5`
  display: flex;
  flex-direction: column;
`

const UpToDown = keyframes`
  from {
    height: 100%;
  }
  to {
    height: 0%;
  }
`
const Battery = styled.div`
  width: 10%;
  margin: 0px 15px;
  height: inherit;
  border-radius: 10px;
  box-sizing: border-box;
  background: blue;
  trasition: 1s;
  background: linear-gradient(0deg, rgba(160,204,141,1) 0%, rgba(255,167,55,1) 53%, rgba(255,107,107,1) 100%);
`

const StatusBattery = styled.div`
  width: 100%;
  height: 100%;
  animation: ${UpToDown} 4s linear infinite;
  background: white;
`
const Img = styled.img``

const Aforo = () =>{

  const url = 'https://bbva-backend20220827172559.azurewebsites.net/api/Agencias'

  React.useEffect(() => {
    axios.get(url).then((response) => {
      console.log(response.data)
    });
  }, []);

    return(
      <Page>
        <Container>
          <ContainerHeader>
            <Ubi>
              <WrapperTitle><h1>Bienvenido</h1>Hoy te encuentras en:<AgencyText>San Isidro</AgencyText></WrapperTitle>
              <Img src={iconMap}/>
            </Ubi>
            <Agency>
              <InfoAgency>
                <h3>La agencia más cercana es:</h3>
                <AgencyText>San Isidro</AgencyText>
                <div><b>Estado : </b>45 / 50</div>
              </InfoAgency>
              <Img src={agency}/>
            </Agency>
            <Battery> 
                <StatusBattery aforo="red" />
              </Battery>
          </ContainerHeader>
          <ContainerChart>
            <TableWrapper>
              <TableHeaders>
                <THead>Agencia</THead>
                <THead>Aforo</THead>
                <THead>Actual</THead>
                <THead>Estado</THead>
              </TableHeaders>
              <TableBody>
                <TBody>Agencia San Isidro</TBody>
                <TBody>50</TBody>
                <TBody>45 / 50</TBody>
                <TBody><StatusRed /></TBody>
              </TableBody>
              <TableBody>
                <TBody>Agencia San Borja</TBody>
                <TBody>35</TBody>
                <TBody>5 / 35</TBody>
                <TBody><StatusGreen /></TBody>
              </TableBody>
              <TableBody>
                <TBody>Agencia La Victoria</TBody>
                <TBody>45</TBody>
                <TBody>30 / 45</TBody>
                <TBody><StatusAmbar /></TBody>
              </TableBody>
              <TableBody>
                <TBody>Agencia Miraflores</TBody>
                <TBody>60</TBody>
                <TBody>10 / 10</TBody>
                <TBody><StatusGreen /></TBody>
              </TableBody>
            </TableWrapper>
          </ContainerChart>
          <ContainerBottom>
            <ContainerMap>
              <ImageMap src={map}/>
            </ContainerMap>
          </ContainerBottom>
        </Container>
      </Page>
    )
}

export default Aforo;