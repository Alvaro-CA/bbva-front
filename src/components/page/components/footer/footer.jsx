import React from 'react'
import styled from 'styled-components'
import logo from '../../../../assets/images/logo.png'

const Container = styled.div`
  background: ${props => props.theme.palette.primary.dark};
  display: flex;
  flex-direction: column;
  padding: 30px 40px;
  min-height: 200px;
`
const LogoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`
const ContainerList = styled.div`
`
const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
`
const LogoImage = styled.img`
  max-width: 100px;
  width: 100%;
  cursor: pointer;
`
const TextFooter = styled.p`
  color: #49a5e6;
  margin-right: 20px;
  font-size: 18px;
`

const Footer = () => {
  const list01 = [
    { name: "Aviso Legal"},
    { name: "Cláusulas Generales de Contratación"},
    { name: "Mapa del Sitio"},
  ]
  const list02 = [
    { name: "Libro de Reclamaciones"},
    { name: "Llámanos (01) 595-0000"},
  ]

  return (
    <Container>
      <LogoWrapper>
        <LogoImage  src={logo}/>
      </LogoWrapper>
      <ContainerList>
        <ListWrapper>
          {list01.map(item => (
            <TextFooter key={item.name}>{item.name}</TextFooter>
          ))}
        </ListWrapper>
        <ListWrapper>
          {list02.map(item => (
            <TextFooter>{item.name}</TextFooter>
          ))}
        </ListWrapper>
      </ContainerList>
    </Container>
  )
}

export default Footer