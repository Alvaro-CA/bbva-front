import React from 'react'
import styled from 'styled-components'
import logo from '../../../../assets/images/logo.png'
import ButtonBBVA from '../../../button/button'

const Container = styled.div`
  display: fixed;
  top: 0;
  background: ${props => props.theme.palette.primary.dark};
  height: 70px;
`
const LogoImage = styled.img`
  max-width: 100px;
  width: 100%;
`
const Navbar = () => {
  return (
    <Container>
      <LogoImage  src={logo}/>
      <ButtonBBVA type="primary" title="Banca por internet"/>
    </Container>
  )
}

export default Navbar