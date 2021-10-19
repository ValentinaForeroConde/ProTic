import React, { } from 'react';
import { useUser } from 'context/UserContext';

const PrivateRoute = ({roleList, children}) => {
  const {userData}= useUser();
  if(userData.Rol !== undefined){
      if(roleList.includes(userData.Rol.label)|| roleList.includes(userData.Estado.label)){
          return children;
      }
  }
  return <h1 className="MensajeNoAutorizado">No estas autorizado para entrar al sitio</h1>;
};

export default PrivateRoute;