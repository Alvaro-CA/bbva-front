import React from 'react'
import styled from 'styled-components'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'

const Container = styled.div`
  width: 100%;
`
const ContainerChildren = styled.div`
  width: 100%;
  max-width: 1400px;
`

const Page = ({children}) => {
  return (
    <Container>
      <Navbar />
      <ContainerChildren>
        {children}
      </ContainerChildren>
      <Footer />
    </Container>
  )
}

export default Page