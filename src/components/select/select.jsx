import React from 'react'
import styled from 'styled-components'

const WrapperSelect = styled.select`
  outline: none;
  min-width: 100px;
  padding: 8px 20px;
  border-radius: 8px;
  margin 4px 6px;
  border: 1 solid ${props => props.theme.palette.primary.dark};
`
const WrapperOption = styled.option``

const SelectBBVA = ({ options, onChange, ...props}) => {
  return (
    <WrapperSelect {...props} onChange={onChange}>
        {options.map(item => (
            <WrapperOption key={item.id}>{item.name}</WrapperOption>
        ))}
    </WrapperSelect>
  )
}

export default SelectBBVA