import React from 'react'
import styled from 'styled-components'

const WrapperSelect = styled.select``
const WrapperOption = styled.select``

const SelectBBVA = ({ options, ...props}) => {
  return (
    <WrapperSelect {...props}>
        {options.map(item => (
            <WrapperOption key={item.key}>{item.option}</WrapperOption>
        ))}
    </WrapperSelect>
  )
}

export default SelectBBVA