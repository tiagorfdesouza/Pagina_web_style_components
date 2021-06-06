import React from 'react';
import styled from 'styled-components';

const Naveg = styled.div 
`
    background-color:#836FFF;
    position: relative;
    display: flex;
    justify-content:space-between;
    align-items:center;
    width: 100%;
    height: 60px;

`
const ItemMenu = styled.a`
font-size: 15px;
font-family: 'Read';
color: #060606;
padding:10px;
font-weight: bold;
`


export default function header() {
    return(
        <Naveg>
            <ItemMenu>Home</ItemMenu>
            <ItemMenu>Serviços</ItemMenu>
            <ItemMenu>Contato</ItemMenu>
            <ItemMenu>Sobre</ItemMenu>
        </Naveg>
    );
}