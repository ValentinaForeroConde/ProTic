import React from "react";
import Aside from "components/Aside";
import Footer from "components/Footer";

const PrivateLayout = ({ children }) => {
  return (
    <div className="contenido">
      <Aside />
      <div > {children}</div>
      <Footer />
    </div>
  );
};

export default PrivateLayout;
