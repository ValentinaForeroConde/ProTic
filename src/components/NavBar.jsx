import React from 'react'
import {Bar} from 'elements/Layouts'
import Googlein from './Googlein'
import { useAuth0 } from "@auth0/auth0-react";


const Navbar = () => {
    const { isLoading } = useAuth0();

    if (isLoading) return <h1>Loading...</h1>

    return (
        <div>
            <Bar>
                <Googlein/>
            </Bar>
        </div>
    )
};

export default Navbar;
