/* eslint-disable default-case */
import React from 'react'
import styled from 'styled-components'

const ContainerButton = styled.button`
    transition: .5s;
    padding: 15px 40px;
    box-sizing: border-box;
    border-radius: 8px;
    cursor: pointer;
    border: 2px solid ${props => props.theme.palette.secondary.dark};

    background: ${props => {
        switch(props.type){
            case 'primary':
                return props.theme.palette.secondary.dark
            case 'secondary': 
                return 'white'
        }
    }};
    
    color: ${props => {
        switch(props.type){
            case 'primary':
                return 'white'
            case 'secondary': 
                return props.theme.palette.secondary.dark
        }
    }};

    :hover{
        color: white;
        border: 2px solid ${props => {
            switch(props.type){
                case 'primary':
                    return props.theme.palette.secondary.light
                case 'secondary': 
                    return props.theme.palette.secondary.dark
            }
        }};

        background: ${props => {
            switch(props.type){
                case 'primary':
                    return props.theme.palette.secondary.light
                case 'secondary': 
                    return props.theme.palette.secondary.dark
            }
        }};
    }
`

const ButtonBBVA = ({ title, onClick, type = 'primary', ...props}) => {
  return (
    <ContainerButton
        title={title}
        onClick={onClick}
        {...props}
        type={type}
    >{title}</ContainerButton>
  )
}

export default ButtonBBVA