import React from "react";
import logoPets1 from "assets/logoPets1.png";

const index = () => {
  return (
    <div display="flex" justify-content="center" height="100%">
      <h1 className='tituloUno' background-color='#fbcf04'>Pet Shop</h1>
      <h1 className='tituloUno' background-color='#fbcf04'>El hogar de las mascotas felices</h1>
      <img width='100%' height='100%' src={logoPets1} alt="" />
    </div>
  );
};

export default index;
