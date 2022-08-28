import styled from "styled-components"

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
const TBody = styled.td``

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
const ContainerBattery = styled.div`
width: 20%;
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
const Battery = styled.div`
width: 100%;
margin: 0px 15px;
height: 100%;
border-radius: 10px;
padding: 10px 20px;
box-sizing: border-box;

background: ${props => {
  switch(props.aforo){
      case "green":
          return "green"
      case "ambar":
          return "#efaf2e"
      case "red":
          return "red"
  };
}};
`
const ContainerHeader = styled.div`
width: 80%; 
display: flex;
justify-content: space-between;
align-items;
box-sizing: border-box;
`
const Agency = styled.div`
width: 50%;
box-sizing: border-box;
border-radius: 20px;
background: white;
margin: 10px 20px;
padding: 0 20px;
box-shadow: 0 3px 6px rgb(0 0 0 / 16%), 0 3px 6px rgb(235 235 235 / 32%);
display: flex;
justify-content: space-between;
align-items: center;
`
const AgencyText = styled.p`
color: #1973b8;
font-size: 30px;
padding: 0;
box-sizing: border-box;
`
const WrapperTitle = styled.h5`
margin: 0;
`
const InfoAgency = styled.h5`
display: flex;
flex-direction: column;
`