import React from 'react';
import styled from 'styled-components';
import product1 from '../../../../assets/images/image1.png';


function Products (){

    const CardProducto= styled.div`
    
    display: flex;
    flex-direction: column;
    width: 200 px;
    align-items: center;
    `

    const ImgProducto = styled.img`
    width: 120px;    
    `

    const ContainerProducts = styled.div`
    display: flex;
    flex-direction: row;
    `

    const TextProducto = styled.div`
    width: 150px;
    text-align: center;
    color: rgb(14 116 144);
    font-weight: 600;
    `



    return (
    <ContainerProducts>
        <CardProducto>
            <ImgProducto src={product1} ></ImgProducto>
            <TextProducto>
                <p>Obtén una Tarjeta de Crédito</p>
            </TextProducto>
        </CardProducto>
        <CardProducto>
            <ImgProducto src={product1} ></ImgProducto>
            <TextProducto>
                <p>Necesito un préstamo</p>
            </TextProducto>
        </CardProducto>
        <CardProducto>
            <ImgProducto src={product1} ></ImgProducto>
            <TextProducto>
                <p>Obtén una Cuenta de ahorros</p>
            </TextProducto>
        </CardProducto>
        <CardProducto>
            <ImgProducto src={product1} ></ImgProducto>
            <TextProducto>
                <p>Quiero cambiar dólares</p>
            </TextProducto> 
        </CardProducto>
        <CardProducto>
            <ImgProducto src={product1} ></ImgProducto>
            <TextProducto>
                <p>Necesito un seguro vehicular</p>
            </TextProducto>
            
        </CardProducto>
    </ContainerProducts>
    
    )

}

export default Products