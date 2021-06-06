import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer 
`
    position: fixed;
    bottom:0;
    left:0:
    heigth: 40px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-itens: center;
    background-color: #588793;
    heigth: 90px;
`
const FooterItem = styled.div 
`
    text-decoration:none;
    font-size: 16px;
    font-weigth:bold; 
    color: #fff;
`


export default function footer(){
    return(
        <React.Fragment>
            <Footer>
                <FooterItem>Aula de Sytle Components</FooterItem>
            </Footer>        
        </React.Fragment>
    ); 
}