import React from "react";
import logoPets1 from "assets/logoPets1.png";

const index = () => {
  return (
    <div className="containerIndexPrincipal">
      <h1 className='tituloUno'>Pet Shop</h1>
      <h1 className='tituloUno'>El hogar de las mascotas felices</h1>
      <img className='imagenPagPrincipal' src={logoPets1} alt="" />
    </div>
  );
};

export default index;
