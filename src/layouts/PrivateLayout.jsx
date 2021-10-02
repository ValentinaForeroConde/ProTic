import React, { useState, useRef } from "react";
import Aside from "components/Aside";
import Footer from "components/Footer";
import { Burger, Menu } from "components";
import { useOnClickOutside } from "Hooks";
import FocusLock from "react-focus-lock";

const PrivateLayout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));
  return (
    <div>
        {/* <div ref={node}>
        <FocusLock disabled={!open}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
        </FocusLock>
      </div> */}
      <Aside/>
      {children}
      <Footer />
    </div>
  );
};

export default PrivateLayout;
