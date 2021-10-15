import React from 'react'
import {Bar,Boton} from 'elements/Layouts'
import PrivateLayout from 'layouts/PrivateLayout'
import { useAuth0 } from "@auth0/auth0-react";




const Navbar = () => {
   
        const { loginWithRedirect } = useAuth0()
    return (
        <div>
            <Bar>         
                
            <Boton onClick={() => loginWithRedirect()}>Log In</Boton>
                     
            </Bar>
            
        </div>
    )
};

export default Navbar;
