import React from 'react'
import styled from 'styled-components'
import logo from '../../../../assets/images/logo.png'
import ButtonBBVA from '../../../button/button'

const Container = styled.div`
  background: ${props => props.theme.palette.primary.dark};
  display: fixed;
  height: 70px;
  padding: 6px 8px;
  top: 0;
`
const NavbarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
`
const WrapperRoutes = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`
const WrapperHead = styled.div`
  display: flex;
  justify-content: center;
  align-items: center
  width: 20%;
`
const LogoImage = styled.img`
  max-width: 100px;
  width: 100%;
  cursor: pointer;
`
const LinkWrapper = styled.p`
  color: white;
  transition: .5s;
  margin-left: 8px;
  margin-right: 8px;
  padding: 15px 30px;
  cursor: pointer;

  :hover{
    background: ${props => props.theme.palette.secondary.dark};
  }
`

const Navbar = () => {
  const listRoutes = [
    {
      name: "INICIO"
    },
    {
      name: 'AFORO'
    }
  ]
  return (
    <Container>
      <NavbarWrapper>
        <WrapperHead>
          <LogoImage  src={logo}/>
        </WrapperHead>
        <WrapperRoutes>
          {listRoutes.map(item => (
            <LinkWrapper>{item.name}</LinkWrapper>
          ))}
        </WrapperRoutes>
        <WrapperHead>
          <ButtonBBVA type="primary" title="Banca por internet"/>
        </WrapperHead>
      </NavbarWrapper>
    </Container>
  )
}

export default Navbar