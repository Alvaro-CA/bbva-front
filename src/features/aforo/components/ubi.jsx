import React from 'react'
import styled from 'styled-components'

const UbiWrapper = styled.div`
    width: 45%;
    border-radius: 20px;
    background: white;
    margin: 10px 20px;
    padding: 0 20px;
    box-shadow: 0 3px 6px rgb(0 0 0 / 16%), 0 3px 6px rgb(235 235 235 / 32%);
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Ubi = ({children}) => {
  return (
    <UbiWrapper>
        {children}
    </UbiWrapper>
  )
}

export default Ubi