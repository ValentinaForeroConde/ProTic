import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import {Boton} from 'elements/Layouts'


const Googlein = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <div>
            <Boton
                onClick={() => loginWithRedirect()}
            >
                Log In
            </Boton>
        </div>
    )
}
export default Googlein
