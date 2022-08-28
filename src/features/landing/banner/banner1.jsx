import React from 'react';
import styled from 'styled-components';
import imageBanner from '../../../assets/images/img2.jpg';

function Banner1 (){

    const ContainerBanner = styled.div`
    display:flex;
    flex-direction: row;

    `

    const ContainerBannerLeft = styled.div`
    background-color: rgb(3 105 161);
    height: 550px;
    z-index:1;
    clip-path: polygon(100% 0, 80% 100%, 0 100%, 0 0%);
    display:flex;
    flex-direction: column;
    position: absolute;
    top:82px;
    left:0px;
    width: 55%;

    
    `


    const ContainerBannerText = styled.div`
    
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 90px;
    margin-top: 90px;

    `

    const TextBanner1= styled.h3`

    color: rgb(20 184 166);
    font-weight: 500;
    font-size: 16px;
    text-align: left;
    margin-top: 0px;
    margin-bottom: 0px;

   `

   const TextBanner2= styled.h3`

    color: rgb(249 250 251);
    font-weight: 700;
    font-size: 45px;
    text-align: left;
    margin-top: 0px;
    margin-bottom: 0px;

   `

   const TextBanner3= styled.h3`

    color: rgb(245 158 11);
    font-weight: 700;
    font-size: 45px;
    text-align: left;
    margin-top: 0px;
    margin-bottom: 0px;

   `

   const TextBanner4= styled.h3`

    color: rgb(249 250 251);
    font-weight: 600;
    text-align: left;
    font-size: 15px;
    margin-top: 20px;
    margin-bottom: 0px;

   `
    
    const ContainerBannerRight = styled.div`
      background-image: url(${imageBanner});
      width: 100%;
      height: 550px;
      background-repeat: no-repeat; 
      background-position: right bottom;    

      `

   return (
    <ContainerBanner>
        <ContainerBannerLeft>
            <ContainerBannerText>
                <TextBanner1>Seguro de Bienes</TextBanner1>
                <TextBanner2>Descubre nuestro nuevo</TextBanner2>
                <TextBanner3>Seguro Hogar Total</TextBanner3>
                <TextBanner4>Hecho 100% a tu medida para que protejas lo que tanto esfuerzo te costó tener.</TextBanner4>
            </ContainerBannerText>
        </ContainerBannerLeft>
        <ContainerBannerRight></ContainerBannerRight>
    </ContainerBanner>
   )
}

export default Banner1