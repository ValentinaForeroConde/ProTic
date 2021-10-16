import React, {useEffect} from "react";
import Aside from "components/Aside";
import Footer from "components/Footer";
import SideResponsive from "components/SideResponsive";
import PrivateRoute from "components/PrivateRoute";

const PrivateLayout = ({ children }) => {    
  
  return (
    <PrivateRoute>
    <div className="layout">
      <Aside/>
      <SideResponsive />
      <div className="contenido"> {children}</div>
      <Footer />
    </div>
    </PrivateRoute>
  );
};

export default PrivateLayout;
