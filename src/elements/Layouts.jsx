import styled, { css } from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Bar = styled.nav`
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 20px;
 background-color: #023047;
 color: #fff;
`;

const Foot = styled.footer`
position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #023047;
  color: #fb8500;
  text-align: center;
`;

const Boton = styled.button`
    height: 45px;
    line-height: 45px;
    width: 150px;
    background: #ffb703;    
    font-weight: bold;
    color:023047;
    border: none;
    border-radius: 3px;
    transition: .1s ease all;
    cursor: pointer;
    &:hover {
        box-shadow: 3px 0px 30px #fb8500
    }
`;

 const Side = styled.aside`
    margin: 0;
    padding: 0;
    width: 200px;
    background-color:#023047;
    position: fixed;
    height: 100%;
    overflow: auto;
  }`
;  
  
  /* Sidebar links */
  const Fila = styled.a`
    display: block;
    color: #FB8500;
    padding: 16px;
    text-decoration: none;
    border-style: solid;

    &.active{
        background-color: blue;
        color: red;
    }
    &:hover{
      background-color: #219EBC;
      color: white;
  }
  }`
 ; 


 
export {Bar,Foot,Boton,Side,Fila};