import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import { Link } from 'react-router-dom';

const Menu = ({ open, ...props }) => {
  
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      
      <Link to='Dasboard' tabIndex={tabIndex}>
        <span aria-hidden="true">💁🏻‍♂️</span>
        Inicio
      </Link>
      <Link to='ventas' tabIndex={tabIndex}>
        <span aria-hidden="true">💁🏻‍♂️</span>
        Ventas
      </Link>
      <Link to='GestionUsuarios' tabIndex={tabIndex}>
        <span aria-hidden="true">💁🏻‍♂️</span>
        Usuarios
      </Link>     
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;
